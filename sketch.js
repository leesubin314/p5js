let eye1;

let ypos;

function setup() {
  createCanvas(400, 400);
  
eye1=20;
  ypos=140;
  
}

function draw() {
  background(220);
  fill(255,219,185);
  ellipse(95,200,20,60); //귀
  ellipse(305,200,20,60);
  
  
  
   rectMode(CENTER);//목
  fill(255,219,185);
  rect(200,370,70,100);
  
  ellipse(200,200,210,260);//얼굴
  fill(255);
  ellipse(160,165,40,20);//눈
  ellipse(240,165,40,20);
  fill(0);
  if (mouseIsPressed){ 
  ellipse(160,165,eye1,eye1);//동공
  ellipse(240,165,20,20);
  }
  rect(150,145,40,5);
  rect(250,145,40,5);
  
  
  arc(200,ypos,200,200,radians(180),radians(0));//헤어
 
  
  
  
  fill(255,219,185);
  triangle(200,180,185,230,215,230);//코
  fill(220,120,120);
  ellipse(200,270,200,13);//입
  line(100,270,300,270);
  
  fill(0);
  arc(207,230,7,7,radians(180),radians(0));
  arc(193,230,7,7,radians(180),radians(0));
  fill(0,0,128);
  strokeWeight(3);
  rect(200,390,100,90);
}

 function keyPressed(){
  if (keyCode===UP_ARROW){
    ypos-=10;}
   else if (keyCode===DOWN_ARROW){
     ypos+=10;
   }
   else if (key === 'g') {
    saveGif('asm3', 10);
  }

 }





    
  
  