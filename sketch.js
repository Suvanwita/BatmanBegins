const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 

var drops = [];
var boy;


function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(600,700);
 // createSprite(400, 200, 50, 50);

  
 var boy=new Umbrella(300,640)
   

    
 
}

function draw() {
  background(240);  
  //drawSprites();
 Engine.update(engine);

 for (var j = 0; j < drops.length; j++) { 
   drops[j].display();
  }
 
if(frameCount%10===0){
  drops.push(new Drops(random(width/2-10,width/2+10)));
}

//boy.display();



}