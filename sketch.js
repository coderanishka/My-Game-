/* The rules of this game are pretty simple..
 All you have to do is feed the hungry turtle, but there are some certain things to remember...
 --> don't let the turtle eat the trash..
 --> if it does eat the trash, then it will decrease in size..
 --> once it's very small, you loose the game..
 --> if the turtle eats the fishes, then it'll grow in size..
 --> you'll win if it comes at a certain big size..

 My message in this game is to let the player know that, just like it's kinda hard to feed the turtle 
 with all the trash coming in between...the same way the real turtles are unable to get their food 
 properly. Instead of eating fishes and crabs and all..they end up eating plastic and all the other sorts of 
 trash.
 Hope you like this game.. :D

*/


var pTurtle,fishR,fishL,shark;

var score = 0;
var lives = 5;
var FishLGroup,FishL2Group;
var FishRGroup,FishR2Group;
var gameState = "play"; 


function preload(){
  //ground images..
  grdImg1 = loadImage("assets/grd1.png");
  grdImg2 = loadImage("assets/grd2.png");
  grdImg3 = loadImage("assets/grd3.png");
  grdImg4 = loadImage("assets/grd4.png");
  grdImg5 = loadImage("assets/grd5.png");
  grdImg6 = loadImage("assets/grd6.png");
  grdImg7 = loadImage("assets/grd7.png");
  grdImg8 = loadImage("assets/grd8.png");

  weedImg1 = loadImage("assets/weed1.png");
  weedImg2 = loadImage("assets/weed2.png");
  weedImg6 = loadImage("assets/weed6.png");
  weedImg7 = loadImage("assets/weed7.png");

  rockImg  = loadImage("assets/rock.png");

  fishL1 = loadImage("assets/fish1L.png");
  fishL2 = loadImage("assets/fish2L.png");
  fishL3 = loadImage("assets/fish3L.png");
  fishL4 = loadImage("assets/fish4L.png");
  fishL5 = loadImage("assets/fish5L.png");
  fishL6 = loadImage("assets/fish6L.png");

  fishR1 = loadImage("assets/fish1R.png");
  fishR2 = loadImage("assets/fish2R.png");
  fishR3 = loadImage("assets/fish3R.png");
  fishR4 = loadImage("assets/fish4R.png");
  fishR5 = loadImage("assets/fish5R.png");
  sharkImg = loadImage("assets/shark.png");

  trash1Img = loadImage("assets/trash1.png");
  trash2Img = loadImage("assets/trash4.png");
  trash3Img = loadImage("assets/trash5.png");
  trash4Img = loadImage("assets/trash3.png");

  turtleImage = loadImage("assets/turtle.png")
  turtleImage2= loadImage('assets/turtle2.png')
}

function setup(){
  createCanvas(5000,2000);

 
  ground1 = createSprite(178,1950);
  ground1.addImage("ground1",grdImg1);
  ground2 = createSprite(690,1950);
  ground2.addImage("ground2",grdImg2);
  ground3 = createSprite(1200,1960);
  ground3.addImage("ground3",grdImg3);
  ground4 = createSprite(1710,1960);
  ground4.addImage("ground4",grdImg4);
  ground5 = createSprite(2220,1945);
  ground5.addImage("ground5",grdImg5);
  ground6 = createSprite(2725,1945);
  ground6.addImage("ground6",grdImg6);
  ground7 = createSprite(3237,1945);
  ground7.addImage("ground7",grdImg7);
  ground8 = createSprite(3745,1945);
  ground8.addImage("ground8",grdImg8);
  ground9 = createSprite(4252,1945);
  ground9.addImage("ground1",grdImg1);
  ground10 = createSprite(4750,1945);
  ground10.addImage("ground2",grdImg2); 
  ground1.scale = 4;
  ground2.scale = 4;
  ground3.scale = 4;
  ground4.scale = 4;
  ground5.scale = 4;
  ground6.scale = 4;
  ground7.scale = 4;
  ground8.scale = 4;
  ground9.scale = 4;
  ground10.scale = 4;
 



  weed1 = createSprite(370,1580);
  weed1.addImage(weedImg1);
  weed1.scale = 4;
  weed2 = createSprite(650,1590);
  weed2.addImage(weedImg2);
  weed2.scale = 4;
  weed3 = createSprite(3500,1580);
  weed3.addImage(weedImg7);
  weed3.scale = 4;
  weed4 = createSprite(3355,1580);
  weed4.addImage(weedImg6);
  weed4.scale = 4;

  rock = createSprite(1560,1680);
  rock.addImage(rockImg);
  rock.scale = 4;

  pTurtle = createSprite(200,200)
  pTurtle.addImage(turtleImage);
  pTurtle.scale = 0.2;
 
  pTurtle.debug = true;

// small fish
   FishLGroup = new Group();
   FishRGroup = new Group();
// big fish   
   FishL2Group = new Group();
   FishR2Group = new Group();
   SharkGroup = new Group();
// trash
   TrashLGroup = new Group();   
   TrashRGroup = new Group();   

}

function draw(){
  background(0,200,200);
  createEdgeSprites();
  fill(0);
  textSize(60);
  text("Score : "+ score, 20,90);
  text("Lives left : "+ lives, 20,120);

  if (gameState === "play"){
      //move the turtle with arrow keys...
      if (keyCode === RIGHT_ARROW){
        pTurtle.x+=10;
        pTurtle.addImage(turtleImage2);
        pTurtle.setCollider("circle",800,-250,100);
      }
      if (keyCode === LEFT_ARROW){
        pTurtle.x-=10;
        pTurtle.addImage(turtleImage);
        pTurtle.setCollider("circle",-800,-250,100);
      }
      if (keyCode === DOWN_ARROW){
        pTurtle.y+=7;
      }
      if (keyCode === UP_ARROW){
        pTurtle.y-=7;
      }

      FishLGroup.collide( pTurtle, explosion);
      FishRGroup.collide( pTurtle, explosion);
      FishL2Group.collide( pTurtle, explosion);
      FishR2Group.collide( pTurtle, explosion);
      //SharkGroup.collide(pTurtle, explosion1);
      TrashLGroup.collide(pTurtle, explosion2);
      TrashRGroup.collide(pTurtle, explosion2);

      if(pTurtle.scale<=0.1){
        gameState = "badEnd";
        pTurtle.destroy();
      }

      if(pTurtle.scale === 0.8){
        gameState = "goodEnd"
      }


      spawnFishLSmall();
      spawnFishLBig();
      spawnFishRSmall();
      spawnFishRBig();
      spawnShark();
      spawnTrashR();
      spawnTrashL();
      drawSprites();
  }

 if (gameState === "badEnd"){

 }

 if (gameState === "goodEnd"){
   scoreBoard = createSprite(2500,1000,500,500);
   scoreBoard.shapeColor = "yellow";
   text("Well Done!!",2700,1200);
   text("Your Brilliant Score is :"+ score, 2600,1400);
 }
}

function explosion(FishLGroup, pTurtle) {
  score+=10; 
  pTurtle.scale+=0.01
  FishLGroup.remove();
 }
 
 function explosion1(shark, pTurtle) {
  score-=20;
  lives--; 
  pTurtle.remove();  
 }

 function explosion2(TrashLGroup, pTurtle) {
  score-=20;
  lives--;
  pTurtle.scale-=0.02; 
  TrashLGroup.destroy();
 }

function spawnFishLSmall(){
 if (frameCount%150===0){
   fishL = createSprite(-20,random(100,1900));
   fishL.velocityX = 7;
   fishL.scale = random(0.5,2);
   fishL.lifetime = 1000;
   var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: fishL.addImage(fishL2);
              break;
      case 2: fishL.addImage(fishL3);
              break;
      case 3: fishL.addImage(fishL5);
              break;   
      default: break;
    }

   FishLGroup.add(fishL);
 }
}
function spawnFishLBig(){
  if (frameCount%200===0){
    fishLb = createSprite(-20,random(100,1900),random(10,30),random(10,30));
    fishLb.velocityX = 5;
    fishLb.scale = random(1.5,2);
    fishLb.lifetime = 1000;

    var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: fishLb.addImage(fishL1);
               break;
       case 2: fishLb.addImage(fishL4);
               break;
       case 3: fishLb.addImage(fishL6);
               break;   
       default: break;
     }
 
    FishL2Group.add(fishLb);
  }
 }
 

 function spawnFishRSmall(){
  if (frameCount%100===0){
    fishR = createSprite(5100,random(100,1900));
    fishR.velocityX = -7;
    fishR.scale = random(1,2);
    fishR.lifetime = 1000;

    var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: fishR.addImage(fishR2);
               break;
       case 2: fishR.addImage(fishR3);
               break;
       case 3: fishR.addImage(fishR5);
               break;   
       default: break;
     }
 
    FishRGroup.add(fishR);
  }
 }
 function spawnFishRBig(){
   if (frameCount%250===0){
     fishRb = createSprite(5100,random(100,1900));
     fishRb.velocityX = -5;
     fishRb.scale = random(1.5,2);
     fishRb.lifetime = 1000;

     var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: fishRb.addImage(fishR1);
                break;
        case 2: fishRb.addImage(fishR4);
                break;
      default: break;
      }
  
     FishR2Group.add(fishRb);
   }
  }
 
  function spawnShark(){
    if (frameCount%1000===0){
      shark = createSprite(5500,1500);
      shark.addImage(sharkImg);
      shark.scale = 3;
      shark.velocityX = -8;
      shark.lifetime = 1000;
      SharkGroup.add(shark);
    }
  }
 
 function spawnTrashL(){
  if (frameCount%60===0){
    trashL = createSprite(-10,random(100,1900));
    trashL.velocityX = 8;
    trashL.scale = 0.1;
    trashL.lifetime = 800;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: trashL.addImage(trash1Img);
      trashL.scale = 0.7;
              break;
      case 2: trashL.addImage(trash2Img);
      trashL.scale = 0.2
              break;
      case 3: trashL.addImage(trash3Img);
              break;   
      case 4: trashL.addImage(trash4Img);
      trashL.scale = 10;
              break;   
      default: break;
    }

    TrashLGroup.add(trashL);
  }
 }

 function spawnTrashR(){
  if (frameCount%100===0){
    trashR = createSprite(5100,random(100,1900));
    trashR.velocityX = -8;
    trashR.scale = 0.1;
    trashR.lifetime = 800;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: trashR.addImage(trash1Img);
      trashR.scale = 0.7;
              break;
      case 2: trashR.addImage(trash2Img);
      trashR.scale = 0.2
              break;
      case 3: trashR.addImage(trash3Img);
              break;   
      case 4: trashR.addImage(trash4Img);
      trashR.scale = 10;
              break;   
      default: break;
    }

    TrashRGroup.add(trashR);
  }
 }