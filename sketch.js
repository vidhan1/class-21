var fixed, moving;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(400, 200, 50, 70);
  fixed.debug = true;
  moving = createSprite(600, 200, 70, 50);
  moving.debug = true;

  object1 = createSprite(100, 300, 50, 50);
  object2 = createSprite(300, 300, 50, 50);
  
  object1.velocityX = 3;
  object2.velocityX = -3;

  //moving.velocityX = -3;
  //fixed.velocityX = 3;  
}

function draw() {
  background(0); 
  moving.x = mouseX;
  moving.y = mouseY; 

  if(collision(object1, moving)){
    moving.shapeColor = "yellow";
    object1.shapeColor = "yellow";

  }
  else{
    moving.shapeColor = "blue";
    object1.shapeColor = "blue";

  }

  

    bounce(object2 ,object1);
   

 
  drawSprites();
}


/*
return --> keyword to give back any kind of value to the calling function

ARGUMENT VS PARAMETER
Argument --> Real value (Takes up some storage)
             It exists
             Given to the function while calling it

Parameter --> NOT REAL
              Given to the function while creating it
              PLACEHOLDER for argument

*/