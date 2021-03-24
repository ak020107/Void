var background1
var backgroundImg
var bow, bowimg
var arrow, arrowimg
var red, redimg
var green, greenimg
var blue, blueimg
var pink, pinkimg
var score=0
var RedA
var GreenA
var gameState="play"
var ArrowA
var one,oneImg
var two, twoImg
var three, threeImg

function preload(){
 //load your images here 
 backgroundImg=loadImage("bg.png")
  redimg= loadImage("pawn.png")
  greenimg= loadImage("enemy1.png")
  oneImg=loadImage("three.png")
bowimg= loadImage("hero.png")
  
  arrowimg= loadImage("bullet.png")
  
  threeImg=loadImage("two.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background1=createSprite(0, 0, windowWidth, windowHeight)
  background1.addImage(backgroundImg)
  background1.scale=3
  background1.velocityY= -3
  bow=createSprite( windowWidth-300, windowHeight/2+200)
  bow.addImage(bowimg)
  bow.scale=.1
  bow.velocityX=-6
  
  RedA=new Group()
   
   GreenA=new Group()
  
  ArrowA=new Group()
  one=createSprite(windowWidth/2,windowHeight/2)
  one.addImage(oneImg)
  one.scale=.7 
 one.visible=false
  
  three=createSprite(windowWidth/2,windowHeight/2)
  three.addImage(threeImg)
  three.scale=.7
 three.visible=false
  }
function spawnArrow(){
   arrow=createSprite(bow.x,300, 50, 50)
  arrow.addImage(arrowimg)
  arrow.scale=.05
  arrow.velocityY=-4
  arrow.lifetime=100
  ArrowA.add(arrow)
  
  arrow.setCollider ("rectangle",0,0,arrow.width,20)
}

  
  
  
  //add code here
  


function draw() {
background("black")
   
  if(gameState==="play"){
edges=createEdgeSprites()
   if(score>100){
     gameState="win"
   }
    one.visible=false
    three.visible=false
    
    bow.visible=true
    if(bow.velocityX===0){
      bow.velocityX=6
    }
    
if(bow.isTouching(edges[0])){
       bow.velocityX=6
      }
  if(bow.isTouching(edges[1])){
    bow.velocityX=-6
  }
  if (background1.y<0){
    background1.y=background1.width/2
   
  }
  if(touches.length>0){
    spawnArrow()
      arrow.y=bow.y
    
    }
  if(keyDown("space")){
    spawnArrow()
      arrow.y=bow.y
  
}
  if(bow.isTouching(GreenA)){
    score=score-4
  }
  if(bow.isTouching(RedA)){
    score=score-2
  }
    var select_balloon = Math.round(random(1,2));
  console.log(select_balloon)
  if(World.frameCount % 80 ==0){
    if(select_balloon ==1){
      Redballoon();
    } else if (select_balloon==2){
    greenballoon();
    
    if(score< -5){
     
      
      
      gameState="lose"
    }
    if(gameState==="lose"){
      bow.velocityX=0
       
       score=0
      bow.visible=false
      GreenA.visible=false
      one.visible=true
      RedA.destroyEach()
      RedA.visible=false
      red.lifetime=0
      green.lifetime=0
      if (background1.y<0){
    background1.y=background1.width/2
   
  }
    }
    }
  }
  if(ArrowA.isTouching(RedA)){
   RedA.destroyEach()
    score=score+25
    ArrowA.destroyEach()
  }
  if(ArrowA.isTouching(GreenA)){
   GreenA.destroyEach()
    score=score+50
    ArrowA.destroyEach()
  }
  }
  if(gameState==="win"){
    score=0
    bow.x=windowWidth-300
    
    bow.visible=false
    
    three.visible=true
    if (background1.y<0){
    background1.y=background1.width/2
   
  }
    restart()
  }
  
restart()
 sc()
  drawSprites()
  if(gameState==="play"){
  textSize(40)
  fill("white")
   text("score:"+score, windowWidth/2, windowHeight-20)
  }
}

function Redballoon(){
  red=createSprite(Math.round(random(windowWidth-windowWidth,windowWidth)),0, 30, 30)
    red.addImage(redimg)
    red.scale=.5
  red.velocityY=1.5
  red.lifetime=600
  RedA.add(red)
}
function greenballoon(){
  green=createSprite(Math.round(random(windowWidth-windowWidth,windowWidth)),0, 30, 30)
    green.addImage(greenimg)
    green.scale=.1
  
  green.velocityY=3
  green.lifetime=600
  GreenA.add(green)
 
  

}
function sc(){
  if(gameState==="play"){
    textSize(20)
    textFont("American Typewriter")
  fill("white")
   text("score:"+score, windowWidth, windowHeight/2-300)
  }
}
function restart(){
  if(keyDown("r")|| touches.length>0){
    gameState="play"
   
  }
}