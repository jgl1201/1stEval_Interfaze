var textSizeRatio = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  fill(255);
  textAlign(CENTER, TOP);
  textFont("Times New Roman");
  textSize(windowWidth * (textSizeRatio + 0.05));
  text("UX LAWS", width/2, 0);
  
  textAlign(CENTER, CENTER);
  textSize(windowWidth * textSizeRatio);
  text("Press a key to get a law: \n a = Hick's Law \n s = Ockham's razor" + 
       "\n d = Prägnanz's Law \n f = Law of Similrity" +
       " \n g = Von Restorff's Law", width/2, height/2);
  
  if (keyIsPressed && key == 'a' ) hick();
  if (keyIsPressed && key == 's') ockham()
  if (keyIsPressed && key == 'd') pragnanz();
  if (keyIsPressed && key == 'f') similarity();  
  if (keyIsPressed && key == 'g') restorff();
  
}

// Ley de Hick
function hick() {  
  background(0);
  
  // EXPLANATION
  fill(255);
  textAlign(CENTER, TOP);
  textFont("Times New Roman");
  textSize(windowWidth * textSizeRatio);
  text("HICK \n The more options, the more time to choose.", width/2, 0);
  
  // 1ST COMPARATIVE
  fill(0, 255, 255);
  var rectWidth = width / 10;
  var rectHeight = height / 20;
  var rectY = height / 2 - rectHeight * 1.5 - 10;
  var spacingFactor = 1.2;
  for (var i = 0; i < 3; i++) {
    var rectX = width / 2 - rectWidth * 1.5 + rectWidth * i * spacingFactor;
    rect(rectX, rectY, rectWidth, rectHeight);
  }
  
  // SEPARATOR
  fill(255);
  var separatorWidth = windowWidth;
  var separatorHeight = 10; // Valor pequeño
  var separatorX = width / 2 - separatorWidth / 2;
  var separatorY = height / 2 - separatorHeight / 2;
  rect(separatorX, separatorY, separatorWidth, separatorHeight);
  
  // 2ND COMPARATIVE
  fill(0, 255, 255);
  var rectY2 = separatorY + separatorHeight + 10;
  var comparativeWidth2 = rectWidth * 6 * spacingFactor;
  var comparativeX2 = width / 2 - comparativeWidth2 / 2;
  for (var i = 0; i < 6; i++) {
    var rectX2 = comparativeX2 + rectWidth * i * spacingFactor; // Adjust the x-coordinate
    rect(rectX2, rectY2, rectWidth, rectHeight);
}
  
}

// Navaja de Ockham
function ockham(){
  background(0);
  
  fill(255);
  textAlign(CENTER, TOP);
  textFont("Times New Roman");
  textSize(windowWidth * textSizeRatio);
  text("OCKHAM \n The simpler solution tends to be the right one.", width/2, 0);
  
  // HEXAGON
  fill(0, 255, 255);
  var hexagonX = width / 2;
  var hexagonY = height / 2 - 50;
  drawHexagon(hexagonX, hexagonY, 50);
  
  // SEPARATOR
  fill(255);
  var separatorWidth = windowWidth;
  var separatorHeight = 10; // Valor pequeño
  var separatorX = width / 2 - separatorWidth / 2;
  var separatorY = height / 2 - separatorHeight / 2;
  rect(separatorX, separatorY, separatorWidth, separatorHeight);
  
  // CIRCLE
  fill(0, 255, 255);
  var circleX = width / 2;
  var circleY = height / 2 + 50; // Adjust the distance from the separator
  var circleSize = 50; // Adjust the size of the circle
  ellipse(circleX, circleY, circleSize, circleSize);
  
}

// Ley de Prägnanz
function pragnanz() {
  background(0);
  
  fill(255);
  textAlign(CENTER, TOP);
  textFont("Times New Roman");
  textSize(windowWidth * textSizeRatio);
  text("PRÄGNANZ \n The mind tends to percieve the simpler forms.", width/2, 0);
  
  // DOTS
  fill(0, 255, 255);
  var circleSize = min(width, height) * 0.025;
  var circleSpacing = circleSize * 2;
  var centerY = height / 2 - circleSize * 2;
  var totalWidth = (circleSize * 4) + (circleSpacing * 3);
  var startX = (width / 2) - (totalWidth / 2) + (circleSize / 2);
  for (var i = 0; i < 4; i++) {
    var circleX = startX + (circleSize + circleSpacing) * i;
    ellipse(circleX, centerY, circleSize, circleSize);
  }
  
  // SEPARATOR
  fill(255);
  var separatorWidth = windowWidth;
  var separatorHeight = 10; // Valor pequeño
  var separatorX = width / 2 - separatorWidth / 2;
  var separatorY = height / 2 - separatorHeight / 2;
  rect(separatorX, separatorY, separatorWidth, separatorHeight);
  
  // "LINE"
  fill(0, 255, 255);
  var lineY = centerY + circleSize * 2 + circleSpacing;
  var lineStartX = startX - circleSize / 2;
  var lineEndX = startX + (circleSize + circleSpacing) * 3;
  var lineWidth = lineEndX - lineStartX;
  rect(lineStartX, lineY, lineWidth, circleSize / 2);
  
}

// Ley de Semejanza
function similarity() {
  background(0);
  
  fill(255);
  textAlign(CENTER, TOP);
  textFont("Times New Roman");
  textSize(windowWidth * textSizeRatio);
  text("SIMILARITY \n Elements with similar characteristics \n tend to be percieved as an only group.", width/2, 0);
  
  var space = width / 40;
  // Set the colors for the circles
  fill(0, 255, 255);
  noStroke();
  // Draw the first line of circles
  for (var i = 0; i < 10; i++) {
    var x = (i * space * 4) + space * 2;
    var y = height / 3;
    ellipse(x, y, space * 3, space * 3);
  }
  // Draw the second line of circles
  fill(255, 0, 0);
  for (var i = 0; i < 10; i++) {
    var x = (i * space * 4) + space * 2;
    var y = height / 2;
    ellipse(x, y, space * 3, space * 3);
  }
  // Draw the third line of circles
  fill(0, 255, 255);
  for (var i = 0; i < 10; i++) {
    var x = (i * space * 4) + space * 2;
    var y = height - height / 3;
    ellipse(x, y, space * 3, space * 3);
  }

}

// Ley de Von Restorff
function restorff() {
  background(0);
  
  fill(255);
  textAlign(CENTER, TOP);
  textFont("Times New Roman");
  textSize(windowWidth * textSizeRatio);
  text("VON RESTORFF'S EFFECT \n When having similar objects, the different one \n uses to be the reminded one.", width/2, 0);
  
  let centerX = width / 2;
  let centerY = height / 2;
  
  let circle1X = centerX - 100;
  let circle1Y = centerY;
  fill(0, 255, 255);
  circle(circle1X, circle1Y, 50);
  
  let circle2X = centerX - 50;
  let circle2Y = centerY;
  fill(0, 255, 255);
  circle(circle2X, circle2Y, 50);
  
  let circle3X = centerX;
  let circle3Y = centerY;
  fill(0, 255, 255);
  circle(circle3X, circle3Y, 50);
  
  let circle4X = centerX + 50;
  let circle4Y = centerY;
  fill(255, 0, 0);
  circle(circle4X, circle4Y, 50);
  
  let circle5X = centerX + 100;
  let circle5Y = centerY;
  fill(0, 255, 255);
  circle(circle5X, circle5Y, 50);
  
}

function drawHexagon(cX, cY, r) {
  beginShape();
  for (let a = 0; a < TWO_PI; a += PI / 3) {
    let x = cX + r * cos(a);
    let y = cY + r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}
