
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ground;
var divisionHeight = 300;

var division = [];
var plinko = [];
var particles = [];

function preload(){
  bg = loadImage("background.jpg")
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


ground = new Ground(400,780,800,30);

// create the divisions
   for (var k = 10; k <=width; k = k + 110) {
     division.push(new Division(k, height-170, 15, divisionHeight));
   }

   for (var i = 40; i <= width; i = i+60){
     plinko.push(new Plinko(i,100))
   }

   for (var i = 10; i <= width; i = i+60){
     plinko.push(new Plinko(i,150))
   }

   for (var i = 40; i <= width; i = i+60){
     plinko.push(new Plinko(i,200))
   }

   for (var i = 10; i <= width; i = i+60){
     plinko.push(new Plinko(i,250))
   }

   for (var i = 40; i <= width; i = i+60){
     plinko.push(new Plinko(i,300))
   }

   for (var i = 10; i <= width; i = i+60){
     plinko.push(new Plinko(i,350))
   }

    for (var i = 40; i <= width; i = i+60){
     plinko.push(new Plinko(i,400))
   }


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  

ground.display();


if(frameCount%60 === 0){
particles.push(new Partical(random(200,600),10))
}
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

     for (var i = 0; i < plinko.length; i++) {
     
   plinko[i].display();
   }
  for (var k = 0; k < division.length; k++) {
     
   division[k].display();
   }


  drawSprites();

}