class Game {
    constructor(){}
getState(){
    var gamereff = database.ref('gameState')
    gamereff.on("value",function(data){
        gameState = data.val()
    })
}
updateState(state){
    database.ref('/').update({
        gameState:state
    })
}
start(){
    if(gameState===0){
        form = new Form()
        form.display()
    }
}

}