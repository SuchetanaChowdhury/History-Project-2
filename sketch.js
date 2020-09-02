//Create variables here
var ground;
var soldier, soldierImg;
var farmer1, farmer1Img;
var farmer2, farmer2Img;
var farmer3, farmer3Img;
var s1, s2, s3, s4, s5, s6, s7, s8, s9;
var s1Img, s2Img, s3Img, s4Img, s5Img, s6Img, s7Img, s8Img, s9Img;
var p1, p2, p3, p4, p8, p6, p7;
var p1Img, p2Img, p3Img, p4Img, p5Img, p6Img, p7Img;
var backgroundImg;
var flag = "initial";

function preload(){
soldierImg = loadImage("images/soldier.png");
farmer1Img = loadImage("images/farmer1.png");
farmer2Img = loadImage("images/peasant2.png");
farmer3Img = loadImage("images/farmer3.png");
backgroundImg = loadImage("images/bg.jpg");

  s1Img = loadImage("images/s1.png");
  s2Img = loadImage("images/s2.png");
  s3Img = loadImage("images/s3.png");
  s4Img = loadImage("images/s4.png");
  s5Img = loadImage("images/s5.png");
  s6Img = loadImage("images/s6.png");
  s7Img = loadImage("images/s7.png");
  s8Img = loadImage("images/s8.png");
  s9Img = loadImage("images/s9.png");

  p1Img = loadImage("images/p1.png");
  p2Img = loadImage("images/p2.png");
  p3Img = loadImage("images/p3.png");
  p4Img = loadImage("images/p4.png");
  p5Img = loadImage("images/p5.png");
  p6Img = loadImage("images/p6.png");
  p7Img = loadImage("images/p7.png");
}

function setup(){
  var canvas = createCanvas(1500, 600);

  ground = createSprite(700, 600, 1600, 75);
  ground.shapeColour = "red";

  soldier = createSprite(500, 450);
  soldier.addImage("soldier",soldierImg);
  soldier.scale = 0.4;

  farmer1 = createSprite(1000, 510);
  farmer1.addImage("farmer", farmer1Img);
  farmer1.scale = 0.4;

  farmer2 = createSprite(1150, 480);
  farmer2.addImage("farmer2", farmer2Img);
  farmer2.scale = 0.6;

  farmer3 = createSprite(1300, 440);
  farmer3.addImage("farmer3", farmer3Img);
  farmer3.scale = 1.2;

  s1 = createSprite(800, 240);
  s1.addImage("s1", s1Img);
  s1.scale = 0.5;
  s1.visible = false;

  s2 = createSprite(800, 250);
  s2.addImage("s2", s2Img);
  s2.scale = 0.5;
  s2.visible = false;

  s3 = createSprite(800, 270);
  s3.addImage("s3", s3Img);
  s3.scale = 0.6;
  s3.visible = false;

  s4 = createSprite(800, 270);
  s4.addImage("s4", s4Img);
  s4.scale = 0.5;
  s4.visible = false;

  s5 = createSprite(800, 240);
  s5.addImage("s5", s5Img);
  s5.scale = 0.6;
  s5.visible = false;

  s6 = createSprite(800, 240);
  s6.addImage("s6", s6Img);
  s6.scale = 0.6;
  s6.visible = false;

  s7 = createSprite(800, 250);
  s7.addImage("s7", s7Img);
  s7.scale = 0.5;
  s7.visible = false;

  s8 = createSprite(800, 250);
  s8.addImage("s8", s8Img);
  s8.scale = 0.5;
  s8.visible = false;

  s9 = createSprite(800, 250);
  s9.addImage("s9", s9Img);
  s9.scale = 0.5;
  s9.visible = false;

  p1 = createSprite(1100, 270);
  p1.addImage("p1", p1Img);
  p1.scale = 0.7;
  p1.visible = false;

  p2 = createSprite(1300, 250);
  p2.addImage("p2", p2Img);
  p2.scale = 1.5;
  p2.visible = false;

  p3 = createSprite(980, 370);
  p3.addImage("p3", p3Img);
  p3.scale = 0.5;
  p3.visible = false;

  p4 = createSprite(1000, 400);
  p4.addImage("p4", p4Img);
  p4.scale = 0.5;
  p4.visible = false;

  p8 = createSprite(1280, 260);
  p8.addImage("p8", p5Img);
  p8.scale = 0.5;
  p8.visible = false;

  p6 = createSprite(1100, 310);
  p6.addImage("p6", p6Img);
  p6.scale = 0.6;
  p6.visible = false;

  p7 = createSprite(1280, 260);
  p7.addImage("p7", p7Img);
  p7.scale = 0.5;
  p7.visible = false;
  }

function draw(){
  background(backgroundImg)

  if(keyWentDown(RIGHT_ARROW)){
    soldier.x = soldier.x + 50;
  }

  if(soldier.x > 750 && flag==="initial"){
     s1.visible = true;
     flag = "s1";
  }

  if (mousePressedOver(s1) && flag === "s1") {
    s1.destroy();
    p1.visible = true;
    flag = "p1";
  }
  console.log(flag);

  if (mousePressedOver(p1) && flag === "p1") {
    p1.destroy();
    s2.visible = true;
    flag = "s2"
  }

  if(mousePressedOver(s2) && flag === "s2"){
    s2.destroy();
    p2.visible = true;
    flag = "p2";
  }

  if(mousePressedOver(p2) && flag === "p2"){
    p2.destroy();
    s3.visible = true;
    flag = "s3"
  }

  if(mousePressedOver(s3) && flag === "s3"){
    s3.destroy();
    p3.visible = true;
    flag = "p3"
  }

  if(mousePressedOver(p3) && flag === "p3"){
    p3.destroy();
    s4.visible = true;
    flag = "s4";
  }

  if(mousePressedOver(s4) && flag === "s4"){
    s4.destroy();
    p4.visible = true;
    flag = "p4";
  }

  if(mousePressedOver(p4) && flag === "p4"){
    p4.destroy();
    s5.visible = true;
    flag = "s5";
  }

  if(mousePressedOver(s5) && flag === "s5"){
    s5.destroy();
    p8.visible = true;
    flag = "p8";
   }

  if(mousePressedOver(p8) && flag === "p8"){
    p8.destroy();
    s6.visible = true;
    flag = "s6";
    }

  if(mousePressedOver(s6) && flag === "s6"){
    s6.destroy();
    s7.visible = true;
    s7.debug = true;
    flag = "s7";
    }

    if(mousePressedOver(s7) && flag === "s7"){
      s7.destroy();
      p6.visible = true;
      flag = "p6";
    }

  if(mousePressedOver(p6) && flag === "p6"){
    p6.destroy();
    s8.visible = true;
    flag = "s8";
  }

  if(mousePressedOver(s8) && flag === "s8"){
    s8.destroy();
    p7.visible = true;
    flag = "p7";
 }

 if(mousePressedOver(p7) && flag === "p7"){
  p7.destroy();
  s9.visible = true;
  flag = "s9";
 }

 if(mousePressedOver(s9) && flag === "s9"){
   s9.destroy();
   soldier.destroy();
   farmer2.destroy();
   farmer3.destroy();
   farmer1.destroy();
   textSize(40);
   fill(0);
   text("THANK YOU!!", 600, 300);
 }

  drawSprites();
  
  textSize(20);
  fill(0);
  text("Press Right Arrow Key to move the Soldier until you get a message", 450, 50);
  text("Mouse-click on the dialouges to view the conversation!", 500, 90);

  drawSprites();
}