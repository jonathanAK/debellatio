const {uniqueGameCode} = require('../misc/nonce.js');

module.exports = (io,gameQue) => {
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
                        firstSeason:(msg.firstSeason && msg.firstSeason >=1 && rmsg.firstSeason <= 30 ? msg.firstSeason:12),
                        maxPlayers:(msg.maxPlayers && msg.maxPlayers >=4 && msg.maxPlayers <= 7 ? msg.maxPlayers:7),
                        GM:(msg.GM && msg.GM == true ? true:false),
                        players:[{name:msg.name.substring(0,30),id:userID}]
                    };
                    gameQue.push(gameSetting);
                    socket.join(gameId);

                    io.in(gameId).emit('gameCreated', gameId);
                }else{
                    throw ("no name or name invalid");
                }
            }catch{
                console.log("Received bad JSON");
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
                        io.in(gameId).emit('playerJoined', gameQue[queIndex].players);
                    }
                } else {
                    throw('game does not exist');
                }
            }catch {
                console.log(`invalid game requested.`);
            }
        });

        socket.on('startGame',msg =>{});

        socket.on('dispatchOrders',msg =>{});
    });
};
