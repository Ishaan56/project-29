const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var polygon,polygonImg;
var slingShot;

function preload(){
polygonImg = loadImage('polygon.png');

}

function setup(){

    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,380,900,20);
    stand1 = new Stand(390,200,250,10);

//level1 

box1 = new Box(330,190,30,40);
box2 = new Box(350,190,30,40);
box3 = new Box(370,190,30,40);
box4 = new Box(390,190,30,40);
box5 = new Box(410,190,30,40);
box6 = new Box(430,190,30,40);
box7 = new Box(450,190,30,40);

//level2
box8 = new Box(340,140,30,40);
box9 = new Box(370,140,30,40);
box10 = new Box(390,140,30,40);
box11 = new Box(410,140,30,40);
box12 = new Box(440,140,30,40);

//level3
box13 = new Box(360,100,30,40);
box14 = new Box(390,100,30,40);
box15 = new Box(420,100,30,40);

//level4
box16 = new Box(390,70,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:100})

}

function draw(){
    background(0);
    Engine.update(engine);
ground.display();
stand1.display();

fill('skyblue');
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();

fill('pink');
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

fill('green');
box13.display();
box14.display();
box15.display();

fill('grey');
box16.display();

imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40);

slingShot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
