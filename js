 function setup() {
  createCanvas(600, 400)
  background(204, 153, 255);
}

function draw() {
  

  
  
   //console.log(mouseIsPressed);
 
  if(mouseIsPressed) {
     rect(mouseX,mouseY, 20, 35 );
  }
}
