var x = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(200);
  
  console.log(mouseX);
  
  if (mouseX < width / 3) {
    circle(random(400), random(400), random(5, 100));
  } else if (mouseX > width / 3 && mouseX < 2 * (width / 3)) {
    background(random(255), random(255), random(255)); 
  } else {
    background(random(255), random(255), random(255));
    fill(random(255), random(255), random(255));
    circle(random(400), random(400), random(5, 100));
  }
  
  /*
  for (var i = 0; i <= width; i += 20) {
    for (var j = 0; j <= height; j += 20) {
      fill(random(255), random(255), random(255));
      circle(random(i, i+20), random(j, j+100), 20);      
    }
  }
  */
}
