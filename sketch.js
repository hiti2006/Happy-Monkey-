
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  //monkey sprite,adding image and scaling
  monkey=createSprite(50,160,20,50)
  monkey.addAnimation("mm",monkey_running)

  monkey.scale=0.1
  //obstacles adding,making a sprite and scaling
  ground=createSprite(200,191,2000,3)
  ground.shapeColor="black"
  ground.velocityX=-2
   survivalTime=0
  
}


function draw() {
  //so the traces or marks of the objects on the canvas are not shown
  
  
  
  console.log(monkey.y)
  background(150)
  
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime= Math.ceil(frameCount/frameRate())
  text("SurvivalTime: " + survivalTime,100,50)
  if(keyDown("space")&&monkey.y>158){
   monkey.velocityY=-13
   // monkey.X=160
    
    
}
  if(ground.x<0)
    {
      ground.x=200
    }
monkey.velocityY = monkey.velocityY + 0.8 
  monkey.collide(ground)
  Obstacles()
  Banana()
drawSprites()
 
}
function Obstacles(){
  if(frameCount%100==0){
   obstacles=createSprite(600,170,800,3)
  obstacles.addImage("obstacle",obstacleImage)
  obstacles.scale=0.1 
   obstacles.velocityX=-3
    obstacles.lifetime=200
  }

}
function Banana (){
  if(frameCount%100==0){
   banana=createSprite(600,100,800,3)
  banana.addImage("banana",bananaImage)
  banana.scale=0.1 
   banana.velocityX=-3
    banana.lifetime=200
  }
  
}





