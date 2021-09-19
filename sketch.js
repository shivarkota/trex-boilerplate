var trex, trexAnimation;

var ground,groundImage;




function preload() {
  trexAnimation = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");


}

function setup() {
  createCanvas(400,400);
  trex = createSprite(200,200,10,10);
  trex.addAnimation("running",trexAnimation);

  ground = createSprite(200,380,400,10);
  ground.addImage("ground",groundImage);

}


function draw() {
  background("lightgray");


  drawSprites();

}