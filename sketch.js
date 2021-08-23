var garden,rabbit;
var gardenImg,rabbitImg;
var apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}




function setup(){
  
  createCanvas(400,400);

  
  function createapples(){
    apple = createSprite(random(50,350),40,10,10);
    //Add image to apple Sprite
    //Scale the Sprite if requried 
    //Gice the velocity so that the apples move downloads
    //give lifetime to the apple Sprite 
   
   }

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}