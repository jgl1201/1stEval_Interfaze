// initial x-coordinate of the circle
var x = 0;
var pos1 = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(5)
}

function draw() {
  background(200, 100, 225);
  
  // colorea las figuras a continuación
  fill(200, 0, 0)
  circle(x, height / 2, 20);
  if (x >= width) x = 0;
  
  // se incrementa el valor blue del circulo
  fill(0, 200, x)
  circle(200, pos1, 20)
  if(pos1 >= 400) pos1=0;
  
  x += 10
  pos1 += 5
  
  console.log('x: ', x)
  console.log('y:', pos1)
}
