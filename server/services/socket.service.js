const Debellatio = require("../debellatio/Debellatio");

const {uniqueGameCode} = require('../misc/nonce.js');

module.exports = (io,gameQue,liveGames) => {
    io.on('connection', function(socket){
        console.log(`a user connected, user ID:${socket.id}`);
        socket.on('newGame', msg =>{
            try{
                if(typeof(msg.name)==="string" && msg.name!==""){
                    const userID = socket.id;
                    const gameId =  uniqueGameCode();
                    const gameSetting={
                        code:gameId,
                        seasons:(msg.seasons && msg.seasons === 4?4:2),
                        seasonLength:(msg.seasonLength && msg.seasonLength >=1 && msg.seasonLength <= 30 ? msg.seasonLength:6),
                        firstSeason:(msg.firstSeason && msg.firstSeason >=1 && msg.firstSeason <= 30 ? msg.firstSeason:12),
                        maxPlayers:(msg.maxPlayers && msg.maxPlayers >=4 && msg.maxPlayers <= 7 ? msg.maxPlayers:7),
                        GM:(msg.GM && msg.GM === true),
                        players:[{name:msg.name.substring(0,30),id:userID}]
                    };
                    gameQue.push(gameSetting);
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
                    if (gameQue[queIndex].players.length < gameQue[queIndex].maxPlayers && !gameQue[queIndex].players.some(player => player.id === userId)) {
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

        socket.on('startGame',() =>{
            const queIndex = gameQue.findIndex(item => item.players[0].id === socket.id);
            if(queIndex!==-1 && gameQue[queIndex].players.length>1){
                const {code:roomId,players, seasons:seasonsPerYear,seasonLength,firstSeason} = gameQue[queIndex];
                const gameSettings = {seasonsPerYear,seasonLength};
                liveGames[roomId]=new Debellatio(players,gameSettings);
                gameQue.splice(roomId, 1);
                //set length of first season
                setTimeout(()=>{liveGames[roomId].isSeasonOver(io.in(roomId),0)},firstSeason * 60000);
                //emit player ID for each player
                for(let i=0; i<liveGames[roomId].playerList.length;i++){
                    io.sockets.in(liveGames[roomId].playerList[i].id).emit('playerId', i+1);
                }
                //emit initial game data to all users
                io.in(roomId).emit('gameStarted', {
                    territories:liveGames[roomId].territories,
                    troops:liveGames[roomId].troops,
                    armies:liveGames[roomId].armies,
                    settings:{gameSettings}
                });
            }
        });

        socket.on('dispatchOrders',msg =>{
            const roomId = Object.keys(socket.rooms).filter(item => item!==socket.id)[0];
            if(roomId && roomId in liveGames){
                liveGames[roomId].dispatchOrders({playerSocket : socket.id,...msg});
                socket.emit('commandReceived');
                liveGames[roomId].isSeasonOver(io.in(roomId));
            }
        });
    });
};
