const Debellatio = require("../debellatio/Debellatio");
const {initGameSettings} = require("../debellatio/init");

module.exports = (io,gameQue,liveGames) => {
    io.on('connection', function(socket){
        console.log(`a user connected, user ID:${socket.id}`);
        socket.on('newGame', msg =>{
            try{
                if((typeof(msg.name)==="string" && msg.name!=="") || msg.GM){
                    const gameSetting = initGameSettings(msg,socket.id);
                    gameQue.push(gameSetting);
                    socket.join(gameSetting.code);
                    io.in(gameSetting.code).emit('gameCreated', gameSetting.code);
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
            const queIndex = gameQue.findIndex(item => item.gameOwner === socket.id);
            if(queIndex!==-1 && gameQue[queIndex].players.length>1){
                const {code:roomId,players, seasons:seasonsPerYear,seasonLength,firstSeason} = gameQue[queIndex];
                const sendToPlayers = (label,msg)=>{io.in(roomId).emit(label,msg)};
                const gameSettings = {roomId,seasonsPerYear,seasonLength, firstSeason};
                liveGames[roomId]=new Debellatio(players,gameSettings);
                gameQue.splice(roomId, 1);
                //set length of first season
                setTimeout(()=>{liveGames[roomId].isSeasonOver(sendToPlayers,0)},firstSeason * 60000);
                //emit player ID for each player
                for(let i=0; i<liveGames[roomId].playerList.length;i++){
                    io.sockets.in(liveGames[roomId].playerList[i].id).emit('playerId', i+1);
                }
                //emit initial game data to all users
                io.in(roomId).emit('gameStarted', liveGames[roomId].getGameData(true));
            }
        });

        socket.on('dispatchOrders',msg =>{
            const roomId = Object.keys(socket.rooms).filter(item => item!==socket.id)[0];
            const sendToPlayers = (label,msg)=>{io.in(roomId).emit(label,msg)};
            if(roomId && roomId in liveGames){
                liveGames[roomId].dispatchOrders({playerSocket : socket.id,...msg});
                socket.emit('commandReceived');
                liveGames[roomId].isSeasonOver(sendToPlayers);
            }
        });

        socket.on('sproutOrders',msg =>{
            const roomId = Object.keys(socket.rooms).filter(item => item!==socket.id)[0];
            const sendToPlayers = (label,msg)=>{io.in(roomId).emit(label,msg)};
            if(roomId && roomId in liveGames){
                liveGames[roomId].dispatchSprout({playerSocket : socket.id,...msg});
                socket.emit('commandReceived');
                liveGames[roomId].isSproutOver(sendToPlayers);
            }
        });

        socket.on('rejoin',msg =>{
            try{
                const {gameId,socketId} = msg;
                if(gameId && gameId in liveGames){
                    const playerId = liveGames[gameId].playerList.findIndex(item => item.id === socketId);
                    if(playerId > -1){
                        socket.join(gameId);
                        liveGames[gameId].playerList[playerId].id = socket.id;
                        socket.emit('playerId', playerId+1);
                        socket.emit('rejoinGame',liveGames[gameId].getGameData(true));
                    }
                }
            }catch{
                console.log('bad rejoin request');
            }
        });

        socket.on('gameOver',msg =>{
            try{
               liveGames[msg] = null;
            }catch{
                console.log('bad gameOver request');
            }
        });
    });
};

