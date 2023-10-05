let halfX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  
  halfX  = windowWidth / 2
}

function draw() {
  background(220);
  
  // Magic number --> Número que "sale de la nada"; No es responsive
  // Evitar su uso; En vez de 200, width/2
  
  // El MODE dice desde donde se toman las coordenadas.
  rectMode(CENTER);
  rect(halfX, 200, 40);
  circle(200, 200, 20);
  
  text("Hello world!", mouseX, mouseY);
  
}
