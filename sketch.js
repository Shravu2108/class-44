
var ground, groundImg;
var suga,suga_Img;
var which;
var count=0;

function preload(){
 blue_Img = loadAnimation("images/blue.jpg");
 suga_Img = loadAnimation("images/suga.png");
 groundImg = loadImage("images/bg.jpg");
}

function setup(){
  createCanvas(1000,600);
  ground = createSprite(0,0,500,500);
  ground.addImage(groundImg);
  ground.scale = 7;
  ground.velocityY = 6;
}
function draw() {
  background("white");
  if(ground.y>500){
    ground.y = ground.height/2;
  }
  spawnTiles();
  drawSprites();
  textSize(15)
  fill("black")
  text("score="+count, 0, 15);  
  if (mousePressedOver(suga) && which==1) 
  {
    count=count+1;
    //suga.destroy();
    suga.changeAnimation("suga1",blue_Img);
    
  }
  if (mousePressedOver(suga) && which==2){
    count=count-1;
    //suga.destroy();
  }
}

function spawnTiles(){
  if(frameCount%150===0){
  which=Math.round(random(1,2));
  suga = createSprite(random(200,800), 0);
  suga.velocityY=8;
  suga.addAnimation("suga1",suga_Img);
  suga.scale=0.1;
    
  }
  
}
