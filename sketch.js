
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var trash;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400, 700, 800, 100);

	left = new Trashcan(500, 600, 10, 100);
	right = new Trashcan(700, 600, 10, 100);
	bottom = new Trashcan(600, 650, 210, 10);

	ball = new Paper(200, 200, 15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  left.display();
  right.display();
  bottom.display();

  ball.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}


