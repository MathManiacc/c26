const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
var pig1;
var log1;
var bird;
var box3;
var box4;
var log2;
var pig2;
var box5;
var log3;
var log4;

var backgroundImage;

function preload(){
    backgroundImage = loadImage("images/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200, 600, 7000, 60);

    box1= new Box(825,535);
    box2= new Box(1010,535);
    pig1 = new Pig(917.5, 535);
    log1 = new Log(917.5, 480, 20, 260, PI/2);

    box3= new Box(825,430);
    box4= new Box(1010,430);
    pig2 = new Pig(917.5, 430);
    log2 = new Log(917.5, 375, 20, 260, PI/2);

    bird = new Bird(200, 100);

    box5 = new Box(917.5, 340)
    log3 = new Log(845, 280, 20, 120, PI*0.25);
    log4 = new Log(990, 280, 20, 120, PI*1.75);
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    bird.display();
    box5.display();
    log3.display();
    log4.display();
}