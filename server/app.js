const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const express = require('express');
const app = express();

//Globals
const gameQue = [];

//setup Web Socket
const server = require('http').createServer(app);
const io = require('socket.io')(server);
require('./services/socket.service')(io,gameQue);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

//set up Authentication cookies
app.use(cookieSession({
    maxAge: 1000 * 60 * 60 * 24 * 7,
    keys:[keys.session.cookieKey]
}));
//set up Views
app.use('/resources',express.static('public'));


app.get('/', (req, res) => {
    res.render('join');
});

server.listen(4000,()=>{
    console.log('listening on http://localhost:4000/');
});