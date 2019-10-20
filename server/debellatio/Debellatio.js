const {TerritoryTypeEnum, TroopTypeEnum, FactoriesProducts} = require('./Enums');
const {updateBalanceTable, resolveSproutSeason} = require('./sprout-destroy');
const defaultTerritories = require('./defaults/territories');
const territoryHolders = JSON.parse(require('./defaults/territoryHolders'));
const defaultVals = {defaultTerritories, territoryHolders};

module.exports = class Debellatio {
    constructor(playerList, gameSettings, defaults = defaultVals) {
        this.armies = [];
        this.orders = {};
        this.attackTable = {};
        this.sproutPhase = false;
        this.excpectedOrders = 0;
        this.populateTerritories(playerList.length, defaults);
        this.season = 0;
        this.gameSettings = gameSettings;
        playerList.sort(() => Math.random() - 0.5);
        this.playerList = [...playerList];
        for (let i = 0; i < playerList.length; i++) {
            this.armies.push({name: playerList[i].name});
        }
    };

    populateTerritories(numOfPlayers, {defaultTerritories, territoryHolders}) {
        this.territories = JSON.parse(defaultTerritories);
        for (let i = 0; i < this.territories.length; i++) {
            this.territories[i].army = territoryHolders[numOfPlayers][i];
            if (this.territories[i].army > 0 && this.territories[i].capital != null) {
                this.territories[i].troop =FactoriesProducts[this.territories[i].capital];
            }
        }
    };

    getGameData(initial = false) {
        const initialStats = (initial ? {
            settings: this.gameSettings,
            timeLeft: (this.gameSettings.firstSeason * 60 - 5)
        } : {});
        return {
            territories: this.territories,
            season: this.season,
            sproutPhase: this.sproutPhase,
            armies: this.armies,
            ...initialStats
        };
    };

    dispatchOrders(msg) {
        try {
            if (msg.season === this.season) {
                const playerId = this.playerList.findIndex(item => item.id === msg.playerSocket) + 1;
                Object.keys(msg.commands).forEach((troop) => {
                    const troopPosition = parseInt(troop);
                    const currentTroop = this.territories[troopPosition];
                    const currentTarget = parseInt(msg.commands[troop].target);
                    const currentAux = parseInt(msg.commands[troop].auxUnit);
                    const currentOrder = msg.commands[troop].order;
                    //Validate command
                    if (currentTroop.army === playerId) {
                        if (this.verifyValidOrder(troopPosition, currentOrder, currentTarget, currentAux)) {
                            this.orders[troopPosition] = {target: currentTarget, aux: currentAux, order: currentOrder};
                        } else {
                            this.orders[troopPosition] = {target: troopPosition, order: 'defend'};
                        }
                    }
                });
            }
        } catch {
            console.log('received bad input');
        }
    };

    dispatchSprout(msg) {
        const legalCommands =['sprout','destroy'];
        try {
            const playerId = this.playerList.findIndex(item => item.id === msg.playerSocket) + 1;
            Object.keys(msg.commands).forEach((troop) => {
                        const troopPosition = parseInt(troop);
                        const validPlayer = (this.territories[troopPosition].army===playerId);
                        const command = msg.commands[troop];
                        const validCommand = (legalCommands.includes(command));
                        if (validPlayer && validCommand){
                            this.orders[troopPosition] = command;
                        }
            });
        } catch {
            console.log('received bad input');
        }
    };

    verifyValidOrder(troop, order, target, aux) {
        const isBoarder = this.territories[troop].borders.includes(target);
        if (this.territories[troop].troop === TroopTypeEnum.Ship && this.territories[target].type === TerritoryTypeEnum.Land) return false; //ships can't target land
        if (this.territories[troop].troop === TroopTypeEnum.Platoon && this.territories[target].type === TerritoryTypeEnum.Sea && order !== 'getConvoyed') return false; //Platoons can only target sea to get convoyed
        if (order === 'defend' && (target === troop || isBoarder)) return true;
        if (!isBoarder) return false;
        switch (order) {
            case 'attack':
                return true;
            case 'assist':
                if (!this.territories[target].borders.includes(aux)) return false;
                break;
            case 'convoy':
                if (this.territories[troop].type !== TerritoryTypeEnum.Sea) return false;
                if (this.territories[troop].troop !== TroopTypeEnum.Ship) return false;
                if (this.territories[aux].troop === TroopTypeEnum.Ship) return false;
                if (!this.territories[troop].borders.includes(aux)) return false;
                break;
            case 'getConvoyed':
                if (this.territories[troop].troop === TroopTypeEnum.Ship) return false;
                if (this.territories[target].type !== TerritoryTypeEnum.Sea) return false;
                break;
            default:
                return false;
        }
        return true;
    }

    isSeasonOver(sendToPlayers, season = null) {
        if (season !== null) {
            if (season === this.season) {
                this.resolveSeason(sendToPlayers);
            }
        } else {
            if (this.territories.findIndex((item, index) => item.troop !== null && this.orders[index] === undefined) === -1) {
                this.resolveSeason(sendToPlayers);
            }
        }
    }

    isSproutOver(sendToPlayers, timeUp = false) {
        if (timeUp || Object.keys(this.orders).length === this.excpectedOrders) {
            resolveSproutSeason(this, sendToPlayers);
        }
    }

    resolveSeason(sendToPlayers) {
        try {
            this
                .shiftAssistToDefence()
                .convoyTroops()
                .createAttackTable()
                .moveTroops()
                .cleanUp()
                .emitToSocket(sendToPlayers);
        } catch {
            console.log('unresolved season');
        }
    }

    shiftAssistToDefence() {
        Object.keys(this.orders).forEach((orderKey) => {
            try {
                const {order, target, aux} = this.orders[orderKey];
                if (order === 'attack' || order === 'convoy') {
                    if (this.territories[target].troop !== null) {
                        if (!this.orders[target] || (this.orders[target].order !== 'attack' && this.orders[target].order !== 'getConvoyed')) {
                            this.orders[target] = {order: 'defend', target};
                        }
                    }
                } else if (order === 'assist') {
                    if (this.orders[aux].target !== target) {
                        delete this.orders[orderKey];
                    }
                }
            } catch {
                console.log('unresolvable command in shit to defence phase');
            }

        });
        return this;
    }

    convoyTroops() {
        Object.keys(this.orders).forEach((orderKey) => {
            const {order, target} = this.orders[orderKey];
            if (order === 'getConvoyed' && this.orders[target].order === 'convoy') {
                this.orders[orderKey] = {order: 'attack', target: this.orders[target].target};
            }
        });
        return this;
    }

    createAttackTable() {
        Object.keys(this.orders).forEach((troop) => {
            const {order, target, aux} = this.orders[troop];
            const whoIsAttacking = {'defend': target, 'attack': troop, 'assist': aux};
            const force = whoIsAttacking[order];
            if (force) {
                if (!this.attackTable[target]) {
                    this.attackTable[target] = {}
                }
                if (!this.attackTable[target][force]) {
                    this.attackTable[target][force] = 1
                } else {
                    this.attackTable[target][force] += 1
                }
            }
        });
        return this;
    }

    moveTroops() {
        const unitsToPlace = [];
        Object.keys(this.attackTable).forEach((battle) => {
            let max = 0;
            let strongest = battle;
            let tie = false;
            Object.keys(this.attackTable[battle]).map(troop => {
                if (this.attackTable[battle][troop] > max) {
                    strongest = troop;
                    max = this.attackTable[battle][troop];
                    tie = false;
                } else if (this.attackTable[battle][troop] === max) {
                    tie = true
                }
            });
            if (strongest !== battle && !tie) {
                unitsToPlace.push({
                    territory: battle,
                    army: this.territories[strongest].army,
                    troop: this.territories[strongest].troop
                });
                this.territories[strongest].troop = null;
            }
        });
        unitsToPlace.forEach(({territory, army, troop}) => {
            this.territories[territory].army = army;
            this.territories[territory].troop = troop;
        });
        return this;
    }

    cleanUp() {
        this.attackTable = {};
        this.orders = {};
        this.season++;
        this.excpectedOrders = 0;
        updateBalanceTable(this);
        this.sproutPhase = (this.season % this.gameSettings.seasonsPerYear === 0 && this.excpectedOrders > 0);
        return this;
    }

    isGameOver() {
        const scores = new Array(this.armies.length + 1).fill(0);
        this.territories.forEach(territory => {
            if (territory.capital != null) scores[territory.army] += 1;
        });
        for (let i = 1; i < this.armies.length + 1; i++) {
            if (scores[i] > 14) return i;
        }
        return false;
    }

    emitToSocket(sendToPlayers) {
        const winner = this.isGameOver();
        if (winner) {
            sendToPlayers('gameOver', winner);
        } else if (this.sproutPhase) {
            sendToPlayers('sproutPhase', this.getGameData());
            setTimeout(() => {
                this.isSproutOver(sendToPlayers, true)
            }, 120000);
        } else {
            sendToPlayers('newSeason', this.getGameData());
            setTimeout(() => {
                this.isSeasonOver(sendToPlayers, this.season)
            }, this.gameSettings.seasonLength * 60000);
        }
    }
};