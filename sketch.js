var bobObject1,bobObject2,bobObject3,bobObject4bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new Bob(380,250);
bobObject2 = new Bob(430,250);
bobObject3 = new Bob(480,250);
bobObject4 = new Bob(330,250);
bobObject5 = new Bob(280,250);

console.log(roof);
roof = new Roof;
rope1 = new Rope(bobObject1.body,roof.body,5,0)
rope2 = new Rope(bobObject3.body,roof.body,100,0)
rope3 = new Rope(bobObject2.body,roof.body,50,0)
rope4 = new Rope(bobObject4.body,roof.body,-50,0)
rope5 = new Rope(bobObject5.body,roof.body,-100,0)


	Engine.run(engine);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject5.display();
  bobObject4.display();

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



function keyPressed() {
	if(keyCode === UP_ARROW){
   
		Matter.Body.applyForce(bobObject5.body,bobObject5.position, {x: -50, y: -45});
		
	}
}