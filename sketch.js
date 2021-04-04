const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;
var backgroundIMG
var Monster

function preload(){
  backgroundIMG = loadImage("gamingbackground2.png")
}

function setup(){
  createCanvas(1200,800)
  engine = Engine.create()
  world = engine.world

  ground = new Ground(600,780,1200,10)
  block1 = new Block(600,370,70,70)
  block2 = new Block(600,440,70,70)
  block3 = new Block(600,510,70,70)
  block4 = new Block(600,580,70,70)
  block5 = new Block(600,650,70,70)
  block6 = new Block(600,720,70,70)
  block7 = new Block(680,440,70,70)
  block8 = new Block(680,510,70,70)
  block9 = new Block(680,580,70,70)
  block10 = new Block(680,650,70,70)
  block11 = new Block(680,720,70,70)
  block12 = new Block(760,510,70,70)
  block13 = new Block(760,580,70,70)
  block14 = new Block(760,650,70,70)
  block15 = new Block(760,720,70,70)
  ball = new Ball(200,400,50)
  chain = new Chain(ball.body,{x:400,y:50})
  ground1 = new Ground(950,570,200,10)
  Monster = new monster(950,500)
  
  }
function draw(){
  background(backgroundIMG)
  
  Engine.update(engine)
  ground.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  ball.display()
  chain.display()
  Monster.display()
  ground1.display()

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}