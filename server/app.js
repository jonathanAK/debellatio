// const cookieSession = require('cookie-session');
// const keys = require('./config/keys');
const express = require('express');
const app = express();

//Globals
const gameQue = [];
const liveGames = [];

//setup Web Socket
const server = require('http').createServer(app);
const io = require('socket.io')(server);
require('./services/socket.service')(io,gameQue,liveGames);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// //set up Authentication cookies
// app.use(cookieSession({
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//     keys:[keys.session.cookieKey]
// }));
//set up Views


//app.use('/resources',express.static('public'));
app.use('/',express.static('public'));


app.get('/', (req, res) => {
    res.render('join');
});

const PORT = process.env.PORT || 4000;	//process.env.PORT is used by heroku
server.listen(PORT,()=>{
    console.log('listening on http://localhost:4000/');
});