var fixedRect, movingRect;
var ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1=createSprite(200,200,50,50);
  ob1.shapeColor="orange";
  ob2=createSprite(300,200,10,10);
  ob2.shapeColor="blue";
  ob3=createSprite(100,200,10,100);
  ob3.shapeColor="pink";
  ob4=createSprite(500,250,100,10);
  ob4.shapeColor="white";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,ob1)){
    movingRect.shapeColor="red";
    ob1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    ob1.shapeColor="pink";
  }

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;
}

}

