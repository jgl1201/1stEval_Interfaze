/* Dividir el canvas en 4 zonas.
En la zona en la que esté el mouse, llenar de un color
Añadir un texto que indicçque el cuadrante
*/

let halfX;
let halfY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  
  halfX = windowWidth / 2;
  halfY = windowHeight / 2;
}

function draw() {
  background(220);
  
  if(mouseX <= halfX && mouseY <= halfY) {
    fill(255, 0, 0);
    rect(0, 0, halfX, halfY);
    fill(100, 200, 50);
    text("Arriba derecha", mouseX, mouseY);
  } else if (mouseX >= halfX && mouseY <= halfY) {
    fill(0, 255, 0);
    rect(halfX, 0, halfX, halfY);
    fill(0);
    text("Arriba izquierda", mouseX, mouseY);
  } else if (mouseX <= halfX && mouseY >= halfY) {
    fill(0, 0, 255);
    rect(0, halfY, halfX, halfY);
    fill(200, 100, 60);
    text("Abajo derecha", mouseX, mouseY)
  } else if (mouseX >= halfX && mouseY >= halfY){
    fill(0);
    rect(halfX, halfY, halfX, halfY);
    fill(255);
    text("Abajo izquierda", mouseX, mouseY);
  }
  
}
