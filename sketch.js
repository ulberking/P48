const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hero,hero_img,shoot,ground,bg,myWorld,myEngine,block1,block2,block3,block4,block5
function preload(){
bg=loadImage("bg.png")
hero_img = loadImage("bird.png")
enemy_img=loadImage("enemy.png")
}
function setup(){
  createCanvas(1700,800);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  ground= new Ground(5000,805,10000,10)
  hero = new Hero(25,25,25,25)
  block1 = new Ground(30,50,70,10)
  block2 = new Ground(270,500,500,10)
  block3 = new Ground(1500,400,90,10)
  block4 = new Ground(1000,270,40,10)
  block5 = new Ground(500,100,60,10)
  block6 = new Ground(1200,200,10,400)
}
function draw(){
  background("white")
  image(bg,0,0,1700,800)
  Engine.update(myEngine);
  ground.display()
  hero.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
}
