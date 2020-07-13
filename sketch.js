var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600, 400);
  createSprite(100,100,20,20);
  thickness = random(22,83);
  speed=random(223,321);
  weight = random(30,52);
  wall = createSprite(1200,200,height/2,thickness);
  bullet = createSprite(200,200,speed,weight);
  
}

function draw() {
  background(220);
  bullet.velocityX = speed;
  wall.shapeColor=color(80,80,80);
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10)
    {
      wall.shapeColor=color(225,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided (Lbullet,Lwall)
{
    var bulletRightEdge= bullet.x + bullet.width;
    var wallLeftEdge= wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
}