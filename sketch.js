let xPos = 25;
let direction = 1;
let xSpeed = 3

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0);

  fill(0, 255, 0);
  ellipse(xPos, 250, 50, 50);

  xPos += xSpeed  * direction;

  
	
	
  if (xPos > 475|| xPos < 25) {
    direction = direction * -1;
	
		
  }

	
}
