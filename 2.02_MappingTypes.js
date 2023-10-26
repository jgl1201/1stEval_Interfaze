// variables for responsiveness
var titleRatio = 0.1;
var textRatio = 0.05;
var textHeight = 0.25;
var textHPos = 0.075;
var rectWRatio = 0.2;
var rectHRatio = 0.1;
var rectBorder = 0.1;
var rectWPos = 0.25;
var shadowOffset = 5;
var shadowBlur = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  focus();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  
  fill(255);
  textAlign(CENTER, TOP);
  textFont("Times New Roman");
  textSize(windowWidth * titleRatio);
  text("MAPPING TYPES", width / 2, 0);
  
  textSize(windowWidth * textRatio);
  text("Press 'A' to activate 1 - 1. \nPress 'W' to activate 1 - A. \nPress 'S' and 'D' to activate A - 1. \nPress 'P' and 'Q' to activate A - B", width / 2, height * textHeight -  windowWidth * textHPos)
  
  noStroke();
  drawRect1();
  drawRect2();
  drawRect3();
  drawrect4();

  if(keyIsDown(65) || keyIsDown(97)) oneToOne();
  else if(keyIsDown(119) || keyIsDown(87) ) oneToMany();
  else if(keyIsDown(68) && keyIsDown(83) || keyIsDown(100) && keyIsDown(115) ) manyToOne();
  else if(keyIsDown(80) && keyIsDown(81) || keyIsDown(112) && keyIsDown(113) ) manyToMany();
  
}

function drawRect1() {
  //shadow
  fill(0, 0, 0, 50); // Color de la sombra (negro con transparencia)
  rect(windowWidth * rectWPos + shadowOffset, height / 2 + shadowOffset, windowWidth * rectWRatio, windowHeight * rectHRatio, windowWidth * rectBorder);
  
  //rectangle
  fill(255, 150, 0);
  rect(windowWidth * rectWPos, height / 2, windowWidth * rectWRatio, windowHeight * rectHRatio, windowWidth * rectBorder);
  
  //text
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Times New Roman");
  textSize(windowWidth * textRatio);
  text("1 - 1", windowWidth * rectWPos, height / 2, windowWidth * rectWRatio, windowHeight * rectHRatio)
  
  
}

function drawRect2() {
  //shadow
  fill(0, 0, 0, 50); // Color de la sombra (negro con transparencia)
  rect(windowWidth * (rectWPos *2.5) + shadowOffset, height / 2 + shadowOffset, windowWidth * rectWRatio, windowHeight * rectHRatio,   windowWidth * rectBorder);
  
  //rectangle
  fill(0, 255, 255);
  rect(windowWidth * (rectWPos *2.5), height / 2, windowWidth * rectWRatio, windowHeight * rectHRatio, windowWidth * rectBorder);
  
  //text
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Times New Roman");
  textSize(windowWidth * textRatio);
  text("1 - A", windowWidth * (rectWPos *2.5), height / 2, windowWidth * rectWRatio, windowHeight * rectHRatio);
}

function drawRect3() {
  var rectHSpace = windowHeight * rectHRatio * 1.5;
  
  //shadow
  fill(0, 0, 0, 50); // Color de la sombra (negro con transparencia)
  rect(windowWidth * rectWPos + shadowOffset, height / 2 + rectHSpace   + shadowOffset, windowWidth * rectWRatio, windowHeight * rectHRatio,   windowWidth * rectBorder);
  
  //rectangle
  fill(239, 22, 229);
  rect(windowWidth * rectWPos, height / 2 + rectHSpace, windowWidth *   rectWRatio, windowHeight * rectHRatio, windowWidth * rectBorder);
  
  //text
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Times New Roman");
  textSize(windowWidth * textRatio);
  text("A - 1", windowWidth * rectWPos, height / 2 + rectHSpace, windowWidth *   rectWRatio, windowHeight * rectHRatio);
}

function drawrect4() {
  var rectHSpace = windowHeight * rectHRatio * 1.5;
  
  //shadow 
  fill(0, 0, 0, 50); // Color de la sombra (negro con transparencia)
  rect(windowWidth * (rectWPos * 2.5) + shadowOffset, height / 2 + rectHSpace + shadowOffset, windowWidth * rectWRatio, windowHeight * rectHRatio,   windowWidth * rectBorder);
  
  //rectangle
  fill(58, 239, 22 );
  rect(windowWidth * (rectWPos * 2.5), height / 2 + rectHSpace, windowWidth * rectWRatio, windowHeight * rectHRatio, windowWidth * rectBorder);
  
  //text
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Times New Roman");
  textSize(windowWidth * textRatio);
  text("A - B", windowWidth * (rectWPos * 2.5), height / 2 + rectHSpace, windowWidth * rectWRatio, windowHeight * rectHRatio);
}

function oneToOne() {
  background(100);
  fill(255, 0, 0);
  circle(windowWidth / 2, windowHeight / 2, windowWidth)
}

function oneToMany() {
  background(255, 255, 0);
  fill(0, 255, 255);
  circle(windowWidth / 2, windowHeight / 2, width / 2)
}

function manyToOne() {
  background(0, 255, 0);
}

function manyToMany() {
  background(166, 0, 255 );
  circle(50, 50, 50)
  circle(150, 50, 50)
  circle(250, 50, 50)
}
