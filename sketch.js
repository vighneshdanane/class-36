var form , game , player , playerCount
var gameState = 0;
var database


function setup(){
    createCanvas(500,500);
    database= firebase.database()
    game = new Game ()
    game.getState()
    game.start()

}

function draw(){
}


