var runner, runnerImg, path, pathImg, power, powerImg, bomb, bombImg, coin, coinImg, energyDrink, energydrinkImg;
function preload(){
  //pre-load images
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
  powerImg = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(300,350);
  runner.addImage("runner",runnerImg);
  runner.scale = 0.3;

  power = createSprite(50,360);
  power.addImage(powerImg);
  power.scale = 0.4;
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
 drawSprites();
}