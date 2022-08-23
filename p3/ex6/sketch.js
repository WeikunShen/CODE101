var currentkey = '1';

//var bgc = color(255);
 function setup() {

createCanvas(700, 700);
smooth();
background(0);

}

function draw() {


  //saveFrame();

// triggering the clear_print function
if(keyIsPressed) {
clear_print();
}
// triggering the newkeychoice
if(mouseIsPressed) {
  drawChoice();
}
}


  function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function


 // key global variable contains whatever key was last pressed
 var currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);

  break;
case '2':
  console.log("2");  // red line
  drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("2");  // green line
  drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("2");  // fat purple line
  drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("2");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
  break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;

case 'e':
  console.log("e");  //ellipse
  drawellipse(color(0, 129, 255), mouseX, mouseY, pmouseX/2, pmouseY/2);
  break;

case 'r':
  console.log("r"); //rect
  tint(255, 255, 255);
  drawrect(color(255, 90, 22), mouseX, mouseY, pmouseX/2, pmouseY/2);
  break;

case 'd':
  console.log("d");
  drawDeathStar(color(187, 187, 187), mouseX, mouseY, 100, 100);
  break;


case 't':
  console.log("t");
  drawtriangle(color(235, 255, 116), mouseX, mouseY, pmouseX/2, pmouseY/2);
  break;

  case 'o':
    console.log("o");  //ellipse
    drawcircle(color(random(255, 0)), mouseX, mouseY, 100, 100);
    break;

  case 'v':
    console.log("v");
    drawflower(color((random(255, 0)), 0, 0), mouseX, mouseY, 100, 100);
    break;

}

}

function drawflower(k, lx, ly, px, py){
  noStroke();
  fill((random(255, 0)), 0, 0);
  ellipse(lx, ly, 100, 100);

}

function drawcircle(k, lx, ly, px, py){
  noStroke();
  fill(random(255,0))
  ellipse(lx, ly, 100, 100);
}

 function drawDeathStar( k,  lx,  ly,  px,  py){
  noStroke();
  fill(187, 187, 187);
  ellipse(lx, ly, 100, 100);
}


 function drawtriangle( k,  lx,  ly,  px, py){
   strokeWeight(2);
   stroke(k);
   fill(128, 255, 0);
   triangle(lx, ly, lx+10, ly-10, lx+50, ly+60);
 }



 function drawrect( k,  lx,  ly,  px,  py){
  strokeWeight(2);
  stroke(k);
  fill(255, 245, 160);
  //strokeWeight(5);
  //stroke(k);
  rect(lx, ly, px/2, py/2);
}


 function drawellipse( k,  lx,  ly,  px,  py) {
  strokeWeight(1);
  stroke(k);
  fill(0, 84, 255);
  ellipse(lx, ly, px/2, py/2);
}



 function drawline( k,  lx, ly,  px, py) {
 // strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}


 function eraser( k, lx, ly, sz) {
  stroke(k);
  ellipse(lx, ly, sz,sz);
}


 function clear_print() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
     background(0);
  } else if (key == 'p' || key == 'P') {
     //saveFrame("x_xxx_####.png");
     //this will save the name as the intials and a random counting number.
     // it will always be larger in value then the last one.
     delay(500);
  }


}
