function collision(mouse, pen){
    //DETECTING COLLISION
    if(mouse.x - pen.x <= mouse.width/2 + pen.width/2
      && pen.x - mouse.x <= mouse.width/2 + pen.width/2
      && mouse.y - pen.y <= mouse.height/2 + pen.height/2
      && pen.y - mouse.y <= mouse.height/2 + pen.height/2){
        
        //Yes, the objects are touching
        //TRUE

        return true;

    }
    else{
        //No, the object aren't touching
        //FALSE

        return false;
    }
  
}

function bounce(mov,ob2){ 

//BOUNCING ALGORITHM
if(ob2.x - mov.x <= ob2.width/2 + mov.width/2
  && mov.x - ob2.x <= ob2.width/2 + mov.width/2){
    mov.velocityX = mov.velocityX*(-1);
    ob2.velocityX = ob2.velocityX*(-1);

  }
  if(ob2.y - mov.y <= ob2.height/2 + mov.height/2
    && mov.y - ob2.y <= ob2.height/2 + mov.height/2){
      mov.velocityY = mov.velocityY*(-1);
      ob2.velocityY = ob2.velocityY*(-1);

    }

  }