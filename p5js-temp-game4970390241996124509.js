var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState = "L1";
var image
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  img = loadImage('https://tylerthecrystalsinger.github.io/Tyler-Tumanda-Digital-Media-Portfolio/Mickey Mouse.gif');
  img2 = loadImage ('https://tylerthecrystalsinger.github.io/Tyler-Tumanda-Digital-Media-Portfolio/Captain America.gif');
  img3 = loadImage('https://tylerthecrystalsinger.github.io/Tyler-Tumanda-Digital-Media-Portfolio/Aladdin and Jasmine.jpg');
  img4 = loadImage ('https://tylerthecrystalsinger.github.io/Tyler-Tumanda-Digital-Media-Portfolio/Sora.gif');


} // end setup


function draw() {
  
  background(220);
  if (gameState == "L1"){
  levelOne();
  }
  if (gameState =="L2"){
    levelTwo();
  }
    if (gameState =="L3"){
    levelThree();
  }
  
  
text(("score: " + score), width/2, 40);
} // end draw

function levelOne(){
  
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  if (score>=5){
  gameState ="L2";
  }
  
// ellipse(ballx, bally, ballSize, ballSize);
image (img, ballx, bally, ballSize, ballSize);
    line(ballx+ballSize/2, bally+ballSize/2, mouseX, mouseY);

} //end level one


function levelTwo(){
  
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  if (score>=10){
    gameState ="L3";
  }
//  line(ballx, bally, mouseX, mouseY);
  
// ellipse(ballx, bally, ballSize, ballSize);
image (img2, ballx, bally, ballSize, ballSize);
  
} //end level two


function levelThree(){
  
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
    
  }
 // if (score>=15){
 //  background(random(255)); 
 // }
//  line(ballx, bally, mouseX, mouseY);
  
 //  ellipse(ballx, bally, ballSize, ballSize);
  image (img3, ballx, bally, ballSize, ballSize);

} //end level three

function levelFour(){
  
  text("Level 4", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
    ballSize= ballSize -1;
  }
 // if (score>=15){
 //  background(random(255)); 
 // }
//  line(ballx, bally, mouseX, mouseY);
  
 //  ellipse(ballx, bally, ballSize, ballSize);
  image (img4, ballx, bally, ballSize, ballSize);

} //end level four
