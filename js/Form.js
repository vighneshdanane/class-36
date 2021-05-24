class Form {
    constructor(){}
display(){
    var title = createElement ('h2')
    title.html("CAR RACING GAME")
    title.position(450 , 100 )
    var input = createInput("NAME")
    input .position (450 , 260 )
    var button = createButton ("PLAY")
    button.position (580 , 320 )
    var gretting = createElement('h3')

    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        gretting.html("hello "+name)
        gretting.position(540 , 260 )
    })


}
}

