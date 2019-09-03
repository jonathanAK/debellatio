module.exports.uniqueUserId = ()=>{
    return `${Date.now().toString( 36)}_${Math.floor(Math.random()*46656).toString(36)}`;
};

module.exports.uniqueGameCode = ()=>{
    return (Math.floor(Math.random()*1632958)+46657).toString(36);
}

