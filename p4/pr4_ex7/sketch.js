
var blob;
var sx = 0;
var sy = 0;

function preload() {
  blob = loadJSON("blob.json");
}

function setup() {
   createCanvas(600,600);
   background(0);
  rectMode(CENTER);
     // this shows the whole blob json data package
   console.log(blob);
   noStroke();

}

function draw() {
  background(0);
  updateToon(blob.toons[0]);  // UFO
  updateToon(blob.toons[1]);  // UFO1
  updateToon(blob.toons[2]);  // UFO2

}

function updateToon(obj) {

      push();
      if ( int(random(10)) > 8) {
       obj.nextX = int(random(obj.moveX.length));
       obj.nextY = int(random(obj.moveY.length));
      }

      obj.posX += obj.moveX[obj.nextX];
      obj.posY += obj.moveY[obj.nextY];


      // console.log(obj.posX);

       if (obj.posX > width) {
         obj.posX = 0;
       }

       if (obj.posX < 0) {
         obj.posX = width;
       }

       if (obj.posY > height) {
         obj.posY = 0;
       }

       if (obj.posY < 0) {
         obj.posY = height;
       }

      drawToon(obj);
      pop();
}



function drawToon( obj) {

    //  console.log(obj.posX[s]);

  push();

        translate(obj.posX , obj.posY);
        //grid as background
        drawgrid(obj.grid,-50,60);
         // head
        fill(obj.r,obj.g,obj.b);
        ellipse(0,20,obj.head,obj.head/2);
        //head
        fill(obj.r,obj.g,obj.b);
        ellipse(0,30,obj.torso+100,obj.torso);
        //glass
        fill(obj.a, obj.m, obj.n);
        ellipse(0, 20, obj.glass, obj.glass/2);

        // eyes
        fill(102, 255, 102);
        ellipse(-40,30,random(0,15),random(0,15));
        fill(255, 0, 0)
        ellipse(40,30,random(0,15),random(0,15));
        //torso
        fill(255);
        textSize(20);
        text(obj.name,-20,-20);

    pop();

}


function drawgrid(gridarr,ox, oy) {
  for (let i = 0; i < 7; i++) {
               for (let j = 0; j < 7; j++) {
                  let a = gridarr[i][j];
                     if (a === 1) {
                       fill(80, 20, 20);
                     } else {
                       fill(144, 255, 252);
                     }
                    // typical way of mapping out a grid (counter * scale) + offset
                     // where counter is a var from the forloop
                     // scale is value that will determine the size/position of each drawing
                     // offset is a relative movement to place
                     // the grid collection around on the canvas
                     // ox and oy are offsets for the grid
                     let s = 15;  // scale
                     let sz = 10  //size of pixels
                    rect((j * s) + ox, (i * s) + oy, sz, sz);
               }
           }
       }
