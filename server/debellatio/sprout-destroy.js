const {TerritoryTypeEnum,TroopTypeEnum} = require('./Enums');

const updateBalanceTable = (context) => {
    const balance = new Array(context.armies.length).fill(0);
    context.territories.forEach(territory => {
        if (territory.army > 0) {
            if (territory.capital !== null) balance[territory.army - 1]++;
            if (territory.troop !== null) balance[territory.army - 1]--;
        }
    });
    for (let army = 0; army < context.armies.length; army++) {
        context.armies[army].balance = balance[army];
        context.excpectedOrders += Math.abs(balance[army]);
    }
};

const resolveSproutSeason = (context,sendToPlayers) => {
    sproutDestroyOrders(context);
    destroyExcessTroops(context);
    context.sproutPhase=false;
    context.excpectedOrders=0;
    sendToPlayers('newSeason',context.getGameData());
    setTimeout(()=>{context.isSeasonOver(sendToPlayers,context.season)},context.gameSettings.seasonLength * 60000);
};

const sproutDestroyOrders = (context) => {
    Object.keys(context.orders).forEach((troop) => {
        try {
            const army = context.territories[troop].army;
            const order = context.orders[troop];
            if (order === 'destroy' && context.armies[army].balance < 0) {
                context.territories[troop].troop = null;
                context.armies[army].balance++;
            } else if (order === 'sprout' && context.armies[army].balance > 0) {
                context.territories[troop].troop = (context.territories[troop].type === TerritoryTypeEnum.Land?TroopTypeEnum.Platoon:TroopTypeEnum.Ship);
                context.armies[army].balance--;
            }
        } catch {
            console.log('unresolvable command in sprout\\destroy phase');
        }
    });
};

const destroyExcessTroops = (context) => {
    for (let army = 0; army < context.armies.length; army++) {
        while (context.armies[army].balance < 0) {
            destroyRandom(context, army+1);
            context.armies[army].balance++;
        }
    }
};

const destroyRandom = (context, army) => {
    let territoryToDestroy;
    do{
        territoryToDestroy = Math.floor(Math.random()*context.territories.length);
    }while(context.territories[territoryToDestroy].army !== army || context.territories[territoryToDestroy].troop === null);
    context.territories[territoryToDestroy].troop = null;
};


module.exports = {updateBalanceTable,resolveSproutSeason};