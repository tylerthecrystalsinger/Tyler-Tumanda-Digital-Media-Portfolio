var ballx = 300
var bally = 300
var ballSize = 40
var score = 0;
var gameState = "L1";

function setup() {
createCanvas (400,400);
textAlign(CENTER);
textSize(20)
}// end of setup

function draw() {
background (220);
if(gameState == "L1") {
levelOne();
}

text(("Score: " + score), width/2, 40);
}// end of draw

function levelOne(){
  text ("Level 1". width/2, height-20);
  var distToBall = dist (ballx, bally, mouseX, mouseY);
if  (distToBall<ballsize/2) {
  ballx = random(width);
  bally = random(height);
  score = score + 1;
}

if (score>=5){
gameState = "L2"
} 

ellipse(ballx, bally, mouseX, mouseY);
line(ballx, bally, mouseX, mouseY)

} // end level 1

function levelTwo() {
  text ("Level 2". width/2, height-20);
  var distToBall = dist (ballx, bally, mouseX, mouseY);
if  (distToBall<ballsize/2) {
  ballx = random(width);
  bally = random(height);
  score = score +1;
}

if (score>=10){
//background(random(255))

} 

ellipse(ballx, bally, mouseX, mouseY);
line(ballx, bally, mouseX, mouseY)

} // end level 2
