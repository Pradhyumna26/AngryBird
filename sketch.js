const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box3,box4;
var log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  //  box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box3 = new box1(100,30,20,20);
    box4 = new box1(200,30,20,20);
    log1 = new log()
    ground = new Ground(200,height,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
  //  box1.display();
  //  box2.display();
    box3.display();
    box4.display();
    log1.display();
    ground.display();
}