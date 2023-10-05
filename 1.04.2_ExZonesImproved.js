let halfX;
let halfY;
let mouseInsideCanvas = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  
  halfX = windowWidth / 2;
  halfY = windowHeight / 2;
  
  // Event Listener para que se dejen de pintar cuadrados al salir del canvas
  const canvas = document.querySelector('canvas');
  canvas.addEventListener('mouseenter', () => {
    mouseInsideCanvas = true;
  });
  canvas.addEventListener('mouseleave', () => {
    mouseInsideCanvas = false;
  });
}

// Función para que el cavas sea responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  halfX = windowWidth / 2;
  halfY = windowHeight / 2;
}

function draw() {
  background(220);
  
  textSize(20);
  
  // Comprovamos que el raton esté en el canvas
  if (mouseInsideCanvas) {
    if (mouseX <= halfX && mouseY <= halfY && mouseX > 0 && mouseY > 0) {
      fill(255, 0, 0);
      rect(0, 0, halfX, halfY);
      fill(100, 200, 50);
      text("Arriba derecha", mouseX, mouseY);
    } else if (mouseX >= halfX && mouseY <= halfY && mouseX < width && mouseY > 0) {
      fill(0, 255, 0);
      rect(halfX, 0, halfX, halfY);
      fill(0);
      text("Arriba izquierda", mouseX, mouseY );
    } else if (mouseX <= halfX && mouseY >= halfY && mouseX > 0 && mouseY < height) {
      fill(0, 0, 255);
      rect(0, halfY, halfX, halfY);
      fill(200, 100, 60);
      text("Abajo derecha", mouseX, mouseY)
    } else if (mouseX >= halfX && mouseY >= halfY && mouseX < width && mouseY < height){
      fill(0);
      rect(halfX, halfY, halfX, halfY);
      fill(255);
      text("Abajo izquierda", mouseX, mouseY);
    }
  }
}
