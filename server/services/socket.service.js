const Debellatio = require("../debellatio/Debellatio");

const {uniqueGameCode} = require('../misc/nonce.js');

module.exports = (io,gameQue,liveGames,playerIndex) => {
    io.on('connection', function(socket){
        console.log(`a user connected, user ID:${socket.id}`);
        socket.on('newGame', msg =>{
            try{
                if(typeof(msg.name)==="string" && msg.name!==""){
                    const userID = socket.id;
                    const gameId =  uniqueGameCode();
                    const gameSetting={
                        code:gameId,
                        seasons:(msg.seasons && msg.seasons == 4?4:2),
                        seasonLength:(msg.seasonLength && msg.seasonLength >=1 && msg.seasonLength <= 30 ? msg.seasonLength:6),
                        firstSeason:(msg.firstSeason && msg.firstSeason >=1 && msg.firstSeason <= 30 ? msg.firstSeason:12),
                        maxPlayers:(msg.maxPlayers && msg.maxPlayers >=4 && msg.maxPlayers <= 7 ? msg.maxPlayers:7),
                        GM:(msg.GM && msg.GM == true ? true:false),
                        players:[{name:msg.name.substring(0,30),id:userID}]
                    };
                    gameQue.push(gameSetting);
                    playerIndex[userID] = gameId;
                    socket.join(gameId);

                    io.in(gameId).emit('gameCreated', gameId);
                }else{
                    throw ("no name or name invalid");
                }
            }catch(e){
                console.log("Received bad JSON",e);
            }
        });

        socket.on('joinGame', msg =>{
            try{
                const gameId = msg.id;
                const queIndex = gameQue.findIndex(item => item.code === gameId);
                if (queIndex !== -1 && msg.name!== "") {
                    const userId= socket.id;
                    if (gameQue[queIndex].players.length < gameQue[queIndex].maxPlayers && !gameQue[queIndex].players.some(player => player.id == userId)) {
                        gameQue[queIndex].players.push({name:msg.name,id:userId});
                        socket.join(msg.id);
                        socket.emit('gameJoined');
                        io.in(gameId).emit('playerJoined', gameQue[queIndex].players);
                    }
                } else {
                    throw('game does not exist');
                }
            }catch(e){
                console.log(`invalid game requested.`,e);
            }
        });

        socket.on('startGame',msg =>{
            const queIndex = gameQue.findIndex(item => item.players[0].id === socket.id);
            if(queIndex!==-1 && gameQue[queIndex].players.length>1){
                const {code:roomId,players, seasons:seasonsPerYear,seasonLength} = gameQue[queIndex];
                const gameSettings = {seasonsPerYear,seasonLength};
                liveGames.push(new Debellatio(roomId,players,gameSettings));
                gameQue.splice(roomId, 1);
                io.in(roomId).emit('gameStarted', 'initial game object',roomId);
            }
        });

        socket.on('dispatchOrders',msg =>{});
    });
};
