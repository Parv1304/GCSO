var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="white";
  car.velocityX=speed;
}

function draw() {
  background(0,0,0);
  if(wall.x-car.x<car.width/2+wall.width/2)
  {
    car.velocityX=0;
    var def=(0.5*weight*speed*speed)/22500;
    if(def<100)
    {
      car.shapeColor="green";
    }
    if(def>=100&&def<=180)
    {
      car.shapeColor="yellow";
    }
    if(def>180)
    {
      car.shapeColor="red";
    }
  }
  textSize(50);
  fill("white");
  text("Deformation:"+def,400,300);
  drawSprites();

}
