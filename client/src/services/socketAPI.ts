import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:4000');

const createGame = (gameSetting:Object,callBacks:{newGameCreated:Function,playerJoined:Function})=> {
    socket.on('gameCreated', (payload:Object) => callBacks.newGameCreated(payload));
    socket.on('playerJoined', (payload:any)=>callBacks.playerJoined(payload));
    socket.emit('newGame', gameSetting);
};

const joinGame = (gameSetting:Object,callBacks:any)=> {
    socket.on('gameJoined', callBacks.joinedGame());
    socket.on('playerJoined', (payload:any)=>callBacks.playerJoined(payload));
    socket.emit('joinGame', gameSetting);
};

export { createGame, joinGame };