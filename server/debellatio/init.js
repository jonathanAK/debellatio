const {uniqueGameCode} = require('../misc/nonce.js');

module.exports.initGameSettings =(msg,userId)=>{
    const gameId =  uniqueGameCode();
    return {
        code:gameId,
        seasons:(msg.seasons && msg.seasons === 4?4:2),
        seasonLength:(msg.seasonLength && msg.seasonLength >=1 && msg.seasonLength <= 30 ? msg.seasonLength:1),//turn back to 6
        firstSeason:(msg.firstSeason && msg.firstSeason >=1 && msg.firstSeason <= 30 ? msg.firstSeason:1),//turn back to 12
        maxPlayers:(msg.maxPlayers && msg.maxPlayers >=4 && msg.maxPlayers <= 7 ? msg.maxPlayers:7),
        GM:(msg.GM && msg.GM === true),
        players:[{name:msg.name.substring(0,30),id:userId}]
    };
};