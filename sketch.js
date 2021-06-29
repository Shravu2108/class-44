
var ground, groundImg;
var suga,suga_Img;
var which;
var count=0;


function preload(){
 blue_Img = loadImage("images/blue.jpg");
 suga_Img = loadImage("images/suga.png");
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
  stroke("white")
  textSize(30)
  fill("black")
  text("Score="+count, 820, 45);  
  if (mousePressedOver(suga)) 
  {
   count=count+1; 
   suga.changeImage("blue1");
   suga.scale=0.5;
  }
}

function spawnTiles(){
  if(frameCount%150===0){
  which=Math.round(random(1,2));
  suga = createSprite(random(200,800), 0);
  suga.velocityY=8;
  suga.addImage("suga1",suga_Img);
  suga.addImage("blue1",blue_Img);
  suga.scale=0.1;
  } 
}
