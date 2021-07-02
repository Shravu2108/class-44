
var ground, groundImg;
var suga,suga_Img, sugaGroup;
var which;
var count=0;
var sound;
var gameState = "play";

function preload(){
 blue_Img = loadImage("images/blue.jpg");
 suga_Img = loadImage("images/suga.png");
 groundImg = loadImage("images/bg.jpg");
 sound = loadSound("music/sound.mp3");
 
}

function setup(){
  createCanvas(1000,600);
  ground = createSprite(0,0,500,500);
  ground.addImage(groundImg);
  ground.scale = 7;
  ground.velocityY = 6;

  sugaGroup = new Group();
}
function draw() {
  background("white");
  stroke("white")
  textSize(30)
  fill("black")
  text("Score="+count, 820, 45); 
  sound.play();
  if(gameState === "play"){

  
  if(ground.y>500){
    ground.y = ground.height/2;
  }
  spawnTiles();
  drawSprites();
   
  if (mousePressedOver(suga)) 
  {
   count=count+1; 
   suga.changeImage("blue1");
   suga.scale=0.5;
  }
  if(suga.y>600){
    gameState = "end";
  }
}
else if(gameState === "end"){
  ground.velocityY = 0;
  sugaGroup.setVelocityYEach(0);
  sugaGroup.setLifetimeEach(-1);
}

}

function spawnTiles(){
  if(frameCount%150===0){
  which=Math.round(random(1,2));
  suga = createSprite(random(200,800), 0);
  suga.velocityY=15;
  suga.addImage("suga1",suga_Img);
  suga.addImage("blue1",blue_Img);
  suga.scale=0.1;
  suga.lifetime = 600;
  sugaGroup.add(suga);
  
  } 
}
