const express = require('express');
const app = express();

//Globals
const gameQue = [];
const liveGames = {};

//setup Web Socket
const server = require('http').createServer(app);
const io = require('socket.io')(server);
require('./services/socket.service')(io,gameQue,liveGames);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

app.use('/',express.static('public'));

app.get('/', (req, res) => {
    res.render('join');
});

const PORT = process.env.PORT || 4000;	//process.env.PORT is used by heroku
server.listen(PORT,()=>{
    console.log('listening on http://localhost:4000/');
});