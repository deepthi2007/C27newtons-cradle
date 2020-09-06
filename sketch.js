var bob1 , bob2 , bob3 , bob4 , bob5;
var roof;
var rope1 , rope2 , rope3 , rope4 , rope5;
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	  roof = new Roof();

	  bob1 = new Bob(300,550);
	  bob2 = new Bob(330,550);
	  bob3 = new Bob(400,550);
	  bob4 = new Bob(470,550);
	  bob5 = new Bob(540,550);

	  rope1 = new Rope(bob1.body,{x:280,y:100});
	  rope2 = new Rope(bob2.body,{x:330,y:100});
	  rope3 = new Rope(bob3.body,{x:400,y:100});
	  rope4 = new Rope(bob4.body,{x:480,y:100});
	  rope5 = new Rope(bob5.body,{x:550,y:100});
	  
	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  if(keyIsDown(UP_ARROW)){
	var pos = bob1.body.position; 
	Matter.Body.setPosition(bob1.body, {x : pos.x - 10, y : pos.y - 5});
	//Matter.Body.setVelocity(bob1.body, -2);
	//bob1.velocityX = -2;
	console.log("error");
}/*  else if(keyIsDown(DOWN_ARROW)){
	var pos = bob1.body.position;
        Matter.Body.setPosition(bob1.body,{x: pos+10 , y:pos.y+5});
	Matter.Body.setVelocity(bob1.body, +2);
	bob1.velocityX = +2;
	var pos2 = bob5.body.position;
        Matter.Body.setPosition(bob1.body,{x: pos2+10 , y:pos2.y+5});
	Matter.Body.setVelocity(bob1.body, +2);
	bob5.velocityX = +2;
 }else{
	var pos = bob1.body.position; 
	Matter.Body.setPosition(bob1.body, {x : pos.x - 10, y : pos.y - 5});
	Matter.Body.setVelocity(bob1.body, -2);
	bob1.velocityX = -2;
 
} */
}
