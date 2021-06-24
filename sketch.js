
var blue,blue_Img;
var which;
var count=0;

function preload(){
 blue_Img = loadImage("images/blue.jpg");
 suga_Img = loadImage("images/suga.png");
 bg_Img = loadImage("images/bg.jpg");
}

function setup(){
  createCanvas(500,500);
 
}
function draw() {
  background("white");
  spawnTiles();
  drawSprites();
  textSize(15)
  fill("black")
  text("score="+count, 0, 15);  
  if (mousePressedOver(blue) && which==1) 
  {
    count=count+1;
    blue.destroy();
    
  }
  if (mousePressedOver(blue) && which==2){
    count=count-1;
    blue.destroy();
  }
}

function spawnTiles(){
  if(frameCount%150===0){
  which=Math.round(random(1,2));
  blue = createSprite(200, 0);
  blue.velocityY=8;
  blue.addImage("blue",blue_Img);
  blue.scale=0.2;
    
  }
  
}