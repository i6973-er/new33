const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball1,ground1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    paper1 = new paper(100,300,20,20);
    
    ground1 = new Ground(600,height,1200,20);
   
    dustbin1 = new Dustbin(800,300,70,10);
    dustbin2 = new Dustbin(765,300,70,10);
    dustbin3 = new Dustbin(835,300,70,10)

}

function draw(){
    background(55);
    Engine.update(engine);

   paper1.display();
  
   ground1.display();

   dustbin1.display();
   dustbin2.display();
   dustbin3.display();

   
   keyPressed();

}
function keyPressed(){

   if (keyCode === UP_ARROW) {
       
    matter.body.applyForce(paperObject.body,paperObject.body.position,{x : 85,y : 85});

   }

}