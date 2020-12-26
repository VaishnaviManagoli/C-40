
var database, position;
var player,form,game;
var gameState = 0;
var playerCount;
var allPlayers;
var c1,c2,c3,c4;
var cars;
var c1img, c2img, c3img, c4img, track, ground;

function preload(){
c1img = loadImage("images/car1.png") 
c2img = loadImage("images/car2.png") 
c3img = loadImage("images/car3.png") 
c4img = loadImage("images/car4.png") 
track = loadImage("images/track.jpg")
ground = loadImage("images/ground.png") 

}

function setup(){
    createCanvas(displayWidth, displayHeight);
    database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
   
}

function draw(){
    background("white");
    
  if(playerCount === 4){
game.update(1);


  }
if(gameState === 1){
    clear();
game.play();

}
 if(gameState === 2){

  game.end();
 }

 
}

