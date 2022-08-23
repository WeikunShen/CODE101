var counter = 0;
var pm =0;

function setup() {
  createCanvas(1000,1000);
  background(10);
  fill(255);
  angleMode(DEGREES);


}

function draw() {

  if (pm == 1) {
 background(255,20);
 fill(255, 156, 0);
 ellipse(0,0,100,100);

  } else {
       background(0,20);
       fill(255, 238, 147);
      ellipse(width/2, height/2, 100, 100);
      noStroke();
      fill(5);
      ellipse(width/2-25, height/2, 80, 80);

  }



  //sizetime();

  let s = second();  // 0-59
  let ms = map(s, 0, 59, 0, 360);

  let m = minute();  // 0-59
  let mm = map(m, 0, 59, 0, 360);

  let h = hour();  // 0-23

   if (h > 12 ) {
      h = h - 12;
   }

   if (h > 11 ) {
      pm = 1;
   } else {
      pm = 0;
    }

   let mh = map(h, 0, 12, 0, 360);

   console.log(h);

  push();
  //translate(width/2,height/2);
  translate(width/2,height/2);
  rotate(ms -90);
  noStroke();
  fill(200);
//  rect(0, 0, 100, 5); // Larger rectangle is rotating in degrees
ellipse(100,0,20,20);
  pop();

  push();
  translate(width/2,height/2);
  rotate(mm -90);
  fill(255,0,0);
  //rect(0, 0, 80, 5); // Larger rectangle is rotating in degrees
  ellipse(200, 0, 35,35);
  pop();

  push();
  translate(width/2,height/2);
  rotate(mh -90);
  fill(255,255,0);
  //rect(0, 0, 50, 5); // Larger rectangle is rotating in degrees
  ellipse(300, 0, 50, 50);
  pop();


  linetime();


 //console.log("hello");
 //counter++;
}



function linetime() {

  let h = hour();  //0-23
 text('Current hour:\n' + h, 5, 50);

  let m = minute(); // 0-59
  text('Current minute: \n' + m, 5, 100);

  let s = second();  // 0-59
  text('Current second: \n' + s, 5, 150);

//  push();

  //  translate(0,-200);
//  let maph = map(h, 0, 23, 0, width);
// rect(maph, height/2-50, 40, 100);
//triangle(200+maph, 100+maph, maph+250, 300-maph, 100+maph, 250, 250);

//  let mapm = map(m, 0, 59, 0, width);
//  rect(mapm, height/2+50, 40, 100);

//  let maps = map(s, 0, 59, 0, width);
//  rect(maps, height/2, 40, 100);
//  pop();

}


function sizetime() {

  let h = hour();  //0-23
//  text('Current hour:\n' + h, 5, 50);

  let m = minute(); // 0-59
//  text('Current minute: \n' + m, 5, 100);

  let s = second();  // 0-59
//  text('Current second: \n' + s, 5, 150);

  push();

  translate(-100,-100);
  let maph = map(h, 0, 23, 0, width);
  fill(255,0,0);
  rect(width/2, height/2-50, maph, maph);

  let mapm = map(m, 0, 59, 0, width);
  fill(255,255,0);
  rect(width/2, height/2+50, mapm, mapm);

  let maps = map(s, 0, 59, 0, width);
  let mapc = map(s, 0, 59, 0, 255);
  fill(0,0,mapc);
  rect(width/2, height/2, maps, maps);
  pop();

}
