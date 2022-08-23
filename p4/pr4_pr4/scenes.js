// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";
var helpbt;


// sprite1.collide(sprite2);
// sprite1.overlap(sprite2);
// sprite1.displace(sprite2);


////////////////////////////// 1 /////////////////
function scene1()  {
    var textX;
    var textY;
    var lox= 0;


// scene1.setup
    this.setup = function() {
      console.log("We are at setup for scene1");

      // do all stuff you want to initialize things,
      // as this it need to be called only once.
    }

    // enter() will be called each time SceneManager switches
    // to this scene
   this.enter = function()  {
        console.log("We are at entering scene1");
        textX = 10;
        textY = 0;
        background("grey");

        textAlign(CENTER);

    }


    this.draw = function()
    {

        background("grey");
        if (lox >0 && lox <width/4) {
          image(flight1, 0, 0);
        }
        fill(255,255,255);


        if (lox > width/4 && lox < width/2) {
          image(flight2, 0, 0);
        }
        if (lox > width/2 && lox < width/2 + width/4) {
          image(flight3, 0, 0);
        }
        if (lox > width/2+width/4 && lox < width) {
          image(flight4, 0, 0);
        }
        translate(lox,150);
        noStroke();
        rect(-75, -25, 30, 50);
        rect(-30, -65, 35, 120);
        rect(-75, -15, 100, 30);
        ellipse(20,0,50,30);
        if (lox > width) {
          lox = 0;
        }
         lox  ++;

        fill(255,255, 255);
         textAlign(CENTER);
         textSize(30);
         text("CLICK TO GO HOME", width/2 - 400, height/2 + height/4);



    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

       if ( !snd1.isPlaying() ) {
          snd1.play();
        }


        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function()
    {


        this.sceneManager.showNextScene();
        if (!snd2.isPlaying()){
          snd2.play();
        }

    }
}

///////////////////////  2  ////////////////////////

function scene2()  {

   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

    hell = "bye";

    // important to create object here not in set
   //this.fire = createSprite(this.lox, this.loy);
    // var fire = createSprite(lox,loy);

  this.setup = function() {
      console.log("We are at setup for scene2");



  }





  this.enter = function()
  {
      console.log("We are at entering scene2");
        console.log(hell);
        fire.position.x =-100;
        fire.position.y = 1000;
        fire.changeAnimation("normal");



  }




    this.draw = function()
    {


        background("red");
        image(img, 0, 0);
        drawSprites();
        push();
        if ((!snd1.isPlaying() && !snd3.isPlaying()) && (!snd6.isPlaying() && !snd4.isPlaying())){
         fill(255, 255, 255);
         textSize(10);
         text("ALRIGHT YOU ARE HOME. CLICK AROUND AND HAVE SOME REST", 30, 20);
       }
           if ((snd1.isPlaying() && snd3.isPlaying()) && (snd6.isPlaying() && snd4.isPlaying())){
            fill(255, 255, 255);
            textSize(20);
            text("Press '3', and close your eyes. we are going to find your innerpeace", 30, 20);
          }
          pop();

    }

    this.keyPressed = function() {


       if ( !snd2.isPlaying() ) {
          snd2.play();
        }





    }

    this.mousePressed = function()
    {
      //fire
      if ((mouseX > 350 && mouseX < 450) && (mouseY > 340 && mouseY < 450)) {


        if (!snd1.isPlaying()) {
          snd1.play();
          fire.position.x = 400;
          fire.position.y = 300;
          fire.changeAnimation("normal");
        }
      // coffee
    } else if ((mouseX > 0 && mouseX < 30) && (mouseY > 450 && mouseY < 500)) {

        if (!snd3.isPlaying()) {
          snd3.play();
        }
        //jazz
      } else if ((mouseX > 0 && mouseX < 100) && (mouseY > 150 && mouseY < 300)) {

        if (!snd4.isPlaying()) {
          snd4.play();
          song.position.x = 400;
          song.position.y = 300;
          song.changeAnimation("normal");
        }
        //book

      } else if ((mouseX > 320 && mouseX < 480) && (mouseY > 200 && mouseY < 270)) {

        if (!snd6.isPlaying()) {
          snd6.play();
        }
      }
        //this.sceneManager.showNextScene();
    }



}






////////////////////////////// 3 /////////////////

function scene3() {

    this.oAnim1 = null;
    var oAnim = null;

    this.setup = function()  {
        console.log("We are at setup for scene3");
        // access a different scene using the SceneManager
        oAnim1 = this.sceneManager.findScene( scene2 );






    }

    this.enter = function()
    {

     //fire.visible = false;
     fire.position.x = 400;
     fire.position.y = 300;


    fire.onMouseOver = function() {

       console.log("over");
       this.changeAnimation("normal");
       this.position.x-=5 ;
       this.position.y-=5 ;
     }

     fire.onMouseOut = function() {

       console.log("out");
       this.changeAnimation("stand");
       this.position.x+=5;
       this.position.y+=5;
     }


        console.log("We are at entering scene2");
    }




    this.draw = function() {
        background("black");
        if (snd5.isPlaying()){
          textAlign(CENTER);
          fill(255, 255, 255);
          textSize(30);
          text("ENJOY YOUR TIME", width/2, height/2);
        }
        if (!snd5.isPlaying()){
          textAlign(CENTER);
          fill(255, 255, 255);
          textSize(19);
          text("Back to your house by pressing 'h', 'm' for menu", width/2, height/2-50);
        }

    }


    this.keyPressed = function() {


       if ( !snd5.isPlaying() )
       {
          snd5.play();
        }
        {
           snd1.stop();
           snd2.stop();
           snd3.stop();
           snd4.stop();
           snd6.stop();
         }



    }


    this.mousePressed = function()  {

       this.sceneManager.showNextScene();
    }

}
