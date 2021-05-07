const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var slingshot,box1,box2,box3,ball,ground,ground2,ground3,dustbin;
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(width/2,height-20,width,10);

    box1=new Box(width-250,height-20-5-10,200,20);
    box2=new Box(width-250-box1.width/2+10,height-20-10-5-10-50-25+10,20,140);
    box3=new Box(width-250+box1.width/2-10,height-20-10-5-10-50-25+10,20,140);
    ball=new Ball(200,50);
    dustbin=new Dustbin(width-250,height-20-10-5-10-50-10,200,160)

    Slingshot = new SlingShot(ball.body,{x:200, y:0});


}

function draw(){
     background("black");
     Engine.update(engine);
     ground.display();

     ball.display();
      dustbin.display();
     if(keyCode===UP_ARROW){
     Body.applyForce(ball.body,ball.body.position,{x:1,y:-13})
 
    }
     else{
     Body.applyForce(ball.body,ball.body.position,{x:0,y:0})
    
    }

    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   Slingshot.fly();
}