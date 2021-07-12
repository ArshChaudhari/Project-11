
var ship,shipImage;
var sea,seaImage;

function preload(){

shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,2400,80);
  sea.scale = 0.25;
  sea.addImage(seaImage);

  ship = createSprite(200,200,50,50);
  ship.scale = 0.3;
  ship.addAnimation("Ship Sails",shipImage);

  sea.velocityX=-4;
}

function draw() {
  background("skyblue");
  
  if(sea.x<0){
    sea.x=sea.width/2;
}

drawSprites();
}

