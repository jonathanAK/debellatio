const router = require('express').Router();
const {uniqueUserId,uniqueGameCode} = require('../misc/nonce.js');

const gameQue = [];

router.post('/new',(req,res)=>{
    try{
        const userID = uniqueUserId();
        const gameSetting={
            code:uniqueGameCode(),
            seasons:(req.body.seasons && req.body.seasons == 4?4:2),
            seasonLength:(req.body.seasonLength && req.body.seasonLength >=1 && req.body.seasonLength <= 30 ? req.body.seasonLength:6),
            firstSeason:(req.body.firstSeason && req.body.firstSeason >=1 && req.body.firstSeason <= 30 ? req.body.firstSeason:12),
            maxPlayers:(req.body.maxPlayers && req.body.maxPlayers >=4 && req.body.maxPlayers <= 7 ? req.body.maxPlayers:7),
            GM:(req.body.GM && req.body.GM == true ? true:false),
            players:[userID]
        }
        gameQue.push(gameSetting);
        req.session.id=userID;
        res.send(gameSetting.code);
    }catch{
        console.log("Received bad JSON");
    }
});

router.get('/join/:id',(req,res)=>{
    const queIndex = gameQue.findIndex(item=>item.code==req.params.id);
    if (queIndex!== -1){
        const userID = req.session.id || uniqueUserId();
        if (gameQue[queIndex].players.length < gameQue[queIndex].maxPlayers && !gameQue[queIndex].players.some(x => x== userID)){
            gameQue[queIndex].players.push(userID);
        }
        req.session.id = userID;
        res.redirect('/auth/login');
        console.log(gameQue[queIndex]);
    }else{
        res.send('game does not exist');
    }

});



module.exports = router;