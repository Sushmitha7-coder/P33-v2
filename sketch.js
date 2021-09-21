

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snow=[];


function preload(){
  bg=loadImage("snow3.jpg");
}






function setup() {
  createCanvas(800,400);

  engine=Engine.create();
    world=engine.world;




}

function draw() {
  background(bg); 
  Engine.update(engine); 



if(frameCount%5===0) {
    snow.push(new Snow(random(0, 800), 30, 30))
    
  }

  for(var j = 0; j<snow.length; j++) {
    snow[j].display()
  }

  drawSprites();
}