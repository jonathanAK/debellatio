describe('test game Object', () => {
    const Debellatio = require("./Debellatio");
    const players = [{name: 'A'}, {name: 'A'},{name: 'C'}];
    const defaultTerritories  = require('./defaults/testTerritories');
    const territoryHolders = JSON.parse(require('./defaults/testTerritoryHolders'));
    const defaultVals={defaultTerritories,territoryHolders};
    const game = new Debellatio(players, {}, defaultVals);

    test('game object gets create as expected', () => {
        expect(game.armies[0].name === 'A' || game.armies[0].name === 'B' || game.armies[0].name === 'C').toBe(true);
        expect(game.playerList.length === 3).toBe(true);
        expect(game.territories[0].troop === 0).toBe(true);
    });

    test('simple attack of emty territory', () => {

        expect(game.armies[0].name === 'A' || game.armies[0].name === 'B' || game.armies[0].name === 'C').toBe(true);
        expect(game.playerList.length === 3).toBe(true);
        expect(game.territories[0].troop === 0).toBe(true);
    });
});
