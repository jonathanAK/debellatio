const {uniqueGameCode} = require('../misc/nonce.js');

module.exports.initGameSettings =(msg,userId)=>{
    const gameId =  uniqueGameCode();
    return {
        code:gameId,
        seasons:(msg.longYear && msg.longYear === true?4:2),
        seasonLength:(msg.seasonLength && msg.seasonLength >=1 && msg.seasonLength <= 30 ? msg.seasonLength:6),
        firstSeason:(msg.firstSeason && msg.firstSeason >=1 && msg.firstSeason <= 30 ? msg.firstSeason:12),
        maxPlayers:(msg.maxPlayers && msg.maxPlayers >=2 && msg.maxPlayers <= 7 ? msg.maxPlayers:7),
        gameOwner:userId,
        players:(msg.GM && msg.GM === true?[]:[{name:msg.name.substring(0,30),id:userId}])
    };
};