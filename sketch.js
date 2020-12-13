var story;
var conar;
var gameState=0;




function setup() {
  createCanvas(windowWidth,windowHeight);
  story=new Story()
  conar=new Conar(windowWidth/2,windowHeight-30)
  story.display();
}

function draw() {
  background(255,255,255);  
  
}
