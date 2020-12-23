
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1;
var Bottle,Bottle2,Bottle3,Bottle4,Bottle5,Bottle6,Bottle7,Bottle8,Bottle9,Bottle11,Bottle12,Bottle13;
var knife1;
var backImg;
var Ground;
var slingshot;
var stand;
var bg;

var score=0;



function preload()
{
  backImg=loadImage("bg2.jpg");

}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	Bottle= new mangoes(900,200,30,60);
	Bottle2= new mangoes(930,200,30,60);
	Bottle3= new mangoes(960,200,30,60);
	Bottle4= new mangoes(870,200,30,60);
	Bottle5= new mangoes(915,150,30,60);
	Bottle6= new mangoes(945,150,30,60);
	Bottle7= new mangoes(885,150,30,60);
  Bottle8= new mangoes(930,100,30,60);
  Bottle9= new mangoes(900,100,30,60);
  Bottle10= new mangoes(915,50,30,60);
	

	

  knife1 = new knifeC(200,300,60,60);
  
  stand = new ground(900,300,300,40)

	slingshot = new SlingShot(knife1.body,{x:200, y:230});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);
 
  //Ground.display();
  
  
  slingshot.display();
  knife1.display();
  stand.display();
  Bottle.display();
  Bottle.score();
  Bottle2.display();
Bottle2.score();
  Bottle3.display();
  Bottle3.score();
  Bottle4.display();
  Bottle4.score();
  Bottle5.display();
  Bottle5.score();
  Bottle6.display();
  Bottle6.score();
  Bottle7.display();
  Bottle7.score();
  Bottle8.display();
  Bottle8.score();
  Bottle9.display();
  Bottle9.score();
  Bottle10.display();
  Bottle10.score();
textSize(20);
fill("black")
  text("SCORE : "+score,1000,30);

  drawSprites();

  detectcollision(knife1,Bottle); 
  detectcollision(knife1,Bottle2); 
  detectcollision(knife1,Bottle3); 
  detectcollision(knife1,Bottle4); 
  detectcollision(knife1,Bottle5); 
  detectcollision(knife1,Bottle6); 
  detectcollision(knife1,Bottle7); 
  detectcollision(knife1,Bottle8); 

  
 
}


function mouseDragged(){
    Matter.Body.setPosition(knife1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectcollision(lstone,lBottle){
	BottleBodyPosition=lBottle.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,BottleBodyPosition.x,BottleBodyPosition.y)
	if(distance<=100)
	{
    Matter.Body.setStatic(lBottle.body,false);
 
	}
}

function keyPressed(){
	if(keyCode === 32){
    Matter.Body.setPosition(knife1.body,{x:200,y:300})
		slingshot.attach(knife1.body);
  }
  
 
  
	}
 
   
   