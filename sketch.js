const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
   
 

    box3 = new Box(750,240,70,70);
    box4 = new Box(920,340,70,70);
    rubber2=new Rubber(100,100);
    hammer = new Hammer(810,160,70,70);
    rubber3=new Rubber(200,100);
    rubber1=new Rubber(350,100);
}

function draw(){
    background("skyblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
     hammer.display();
     rubber1.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     rubber3.display();
     rubber2.display();
}