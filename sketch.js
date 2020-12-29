
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var boxBottom,boxLeft,boxRight;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper (100,200,70);
	ground=new Ground (750,570,1500,20);
	boxBottom=new BoxBottom(950,550,270,20)
	boxLeft=new BoxSides(830,385,20,310)
	boxRight=new BoxSides(1070,385,20,310)
	dustbin=new DustbinImg(950,400,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  boxBottom.display();
  boxLeft.display();
  boxRight.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:850,y:-1400});
	}
}



