class Game{
    constructor(){}

getState(){
var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
    gameState = data.val();
})

}

update(state){
database.ref('/').update({
gameState:state

})
}

    async start(){
    if(gameState === 0){
        player=new Player();

            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }

            form=new Form();
            form.display();
        }
        c1 = createSprite(100,200)
        c1.addImage("car1",c1img)
        c2 = createSprite(300,200)
        c2.addImage("car2",c2img)
        c3 = createSprite(500,200)
        c3.addImage("car3",c3img)
        c4 = createSprite(700,200)
        c4.addImage("car4",c4img)
        cars = [c1,c2,c3,c4]
    }

play(){

form.hide();
textSize(30);
text("Game Started",100,100 );

Player.getPlayerInfo()
if(allPlayers !== undefined){
   background("green")
   image(track, 0,-displayHeight*4, displayWidth, displayHeight*5)

    var index = 0
    var x = 220
    var y ;
    for(var plr in allPlayers){
        index = index + 1
        x = x + 240
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if(index ===  player.index){
            fill(random(0,255),random(0,255),random(0,255))
            
        circle(x,y,150)
            
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index-1].y;
        }
        
    }
}
 
if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance += 10
    player.update();
}
if(player.distance > 4070){
gameState = 2

}
drawSprites();
}
end(){
console.log('Game Ended');


}
}
