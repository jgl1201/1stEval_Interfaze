var x = 0; // initial x-coordinate of the circle

function setup() {
  createCanvas(400, 400);
  frameRate(10)
}

function draw() {
  background(200, 100, 225);
  
  circle(x, height / 2, 20);  
  
  x += 10
}
