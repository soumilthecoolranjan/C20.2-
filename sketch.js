
var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  movingRect= createSprite(600, 400, 50, 80); 
  fixedRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green"; 
  fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
&& fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
&& movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 
&& fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2){
  movingRect.shapeColor = "red"; 
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green"; 
  fixedRect.shapeColor = "green";
}
  
  drawSprites();
}