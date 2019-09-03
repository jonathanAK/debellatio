const router = require('express').Router();
const {uniqueUserId,uniqueGameCode} = require('../misc/nonce.js');

const gameQue = [];

router.post('/new',(req,res)=>{
    try{
        if(typeof(req.body.name)==="string"){
            const userID = uniqueUserId();
            const gameSetting={
                code:uniqueGameCode(),
                seasons:(req.body.seasons && req.body.seasons == 4?4:2),
                seasonLength:(req.body.seasonLength && req.body.seasonLength >=1 && req.body.seasonLength <= 30 ? req.body.seasonLength:6),
                firstSeason:(req.body.firstSeason && req.body.firstSeason >=1 && req.body.firstSeason <= 30 ? req.body.firstSeason:12),
                maxPlayers:(req.body.maxPlayers && req.body.maxPlayers >=4 && req.body.maxPlayers <= 7 ? req.body.maxPlayers:7),
                GM:(req.body.GM && req.body.GM == true ? true:false),
                players:[{name:req.body.name.substring(0,30),id:userID}]
            }
            gameQue.push(gameSetting);
            req.session.id=userID;
            res.send(gameSetting.code);
        }else{
            throw ("no name or name invalid");
        }

    }catch{
        res.send("bad request");
        console.log("Received bad JSON");
    }
});

router.post('/join',(req,res)=>{
    try {
        const queIndex = gameQue.findIndex(item => item.code == req.body.id);
        if (queIndex !== -1) {
            const userID = req.session.id || uniqueUserId();
            if (gameQue[queIndex].players.length < gameQue[queIndex].maxPlayers && !gameQue[queIndex].players.some(player => player.id == userID)) {
                gameQue[queIndex].players.push({name:req.body.name,id:userID});
            }
            req.session.id = userID;
            res.redirect('/waiting');
            console.log(gameQue[queIndex]);
        } else {
            throw('game does not exist');
        }
    }catch {
        // res.send('game does not exist');
        res.redirect('/');

    }

});



module.exports = router;