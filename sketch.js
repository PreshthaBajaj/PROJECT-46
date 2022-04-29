var bedroom, bedroomImg, livingr, livingrImg, kitchen, kitchenImg;
var door2Img, door2;
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;
var marry1, marryImg1, door1, door1Img, Q1, boyQ, boyQImg, clockQ,clockQImg, doorQ, doorQImg;

function preload(){

    bedroomImg = loadImage("assets/darkroom.jpeg");
    livingrImg = loadImage("assets/livingroom.jpeg");
    kitchenImg = loadImage ("assets/kitchen.jpeg");
    marryImg1 = loadImage("assets/G2.png");
    door1Img = loadImage("assets/closedroom.png");
    door2Img = loadImage("assets/door2.jpeg");
    boyQImg = loadImage("assets/boyQ.png");
    clockQImg = loadImage("assets/clockQ.png");
    doorQImg = loadImage("assets/doorQ.png");

}

function setup(){
    createCanvas(windowWidth, windowHeight);

    bedroom = createSprite(width/2,height/2,width,height);
    bedroom.addImage("br",bedroomImg);
    bedroom.scale = 4;

    livingr = createSprite(width/2,height/2,width,height);
    livingr.addImage("lr",livingrImg);
    livingr.scale = 2.5;
    livingr.visible = false;

    kitchen = createSprite(width/2,height/2,width,height);
    kitchen.addImage("kt",kitchenImg);
    kitchen.scale = 0.68;
    kitchen.visible = false;

    marry1 = createSprite(width/2 - 500, height - 220);
    marry1.addImage("girl1", marryImg1);
    marry1.scale = 0.5;

    door1 = createSprite(width/2 + 500, height - 320);
    door1.addImage("door1", door1Img);
    door1.scale = 0.3;

    door2 = createSprite(width/2 + 500, height - 320);
    door2.addImage("door2", door2Img);
    door2.scale = 1.7;
    door2.visible = false;

    boyQ = createSprite(width/3 - 150, height/4 + 170,120,150);
    boyQ.addImage("boy", boyQImg);
    boyQ.visible = false;

    clockQ = createSprite(width/3 + 230, height/4 + 170,170,150);
    clockQ.addImage("clock", clockQImg);
    
    clockQ.visible = false;

    doorQ = createSprite(width/3 + 600, height/4 + 170,120,150);
    doorQ.addImage("door", doorQImg);
    doorQ.scale = 3;
    doorQ.visible = false;

    }

function draw() {
    background("black");
    

    if (keyIsDown(RIGHT_ARROW)){
        marry1.x = marry1.x + 7;
    }

    if (marry1.isTouching(door1)){
      quiz1()
    }

  
    
            drawSprites();
}


function quiz1(){

   background("blue");
   
   marry1.visible = false;
   door1.visible = false;
   bedroom.visible = false;
   textSize (50);
   fill ("yellow");
   text ("Complete The Quiz To Open The Door", width/2, height/4 - 200);
   fill ("yellow");
   text ("What has Hands but cannot Clap?", width/4 , height/4 - 50);

    boyQ.visible = true;
    boyQ.scale = 0.5;
    if (mousePressedOver(boyQ)){
        boyQclicked();
        boyQ.visible = false;
    }

    clockQ.visible = true;
    clockQ.scale = 0.5;
    if (mousePressedOver(clockQ)){
        clockQclicked();
        
    }

    doorQ.visible = true;
    doorQ.scale = 0.5;
    if (mousePressedOver(doorQ)){
        boyQclicked();
        doorQ.visible = false;
    }

    
    }


function clockQclicked() {
    clockQ.visible = false;
    doorQ.visible = false;
    
    boyQ.visible = false;
    
}



