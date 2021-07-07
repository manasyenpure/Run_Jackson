var boy, boy_running, boy_collided;
var path, pathImage, invisibleGround1, invisibleGround2;


function preload(){
boy_running = loadAnimation("Runner-2.png", "Runner-1.png");

pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
path = createSprite(180,180,200,400);
path.addImage("path", pathImage);
path.velocityY = 5;


boy = createSprite(170,300,50,20);
boy.addAnimation("running", boy_running);

boy.scale = 0.1;

invisibleGround1 = createSprite(10,200,20,400);
invisibleGround1.visible = false;

invisibleGround2 = createSprite(360,200,20,400);
invisibleGround2.visible = false;
}

function draw() {
  background("white");

  boy.velocityX = 0
  boy.velocityY = 0

  
  console.log(path.y)

if (path.y > 400){
 path.y = path.height/20;
}
  
if(keyDown("left")){
  boy.velocityX =-6;
  
  }
  
  if(keyDown("right")){
    boy.velocityX =6;
  }
  
  boy.collide(invisibleGround1);
  boy.collide(invisibleGround2);
  drawSprites();
}
