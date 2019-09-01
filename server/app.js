const express = require('express');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

const app = express();

// set view engine
app.set('view engine', 'ejs');

//set up Authentication cookies
app.use(cookieSession({
    maxAge: 1000 * 60 * 60 * 24 * 7,
    keys:[keys.session.cookieKey]
}));

// Join page
app.get('/', (req, res) => {
    res.render('join');
});

app.listen(4000,()=>{
    console.log('listening on http://localhost:4000/');
});