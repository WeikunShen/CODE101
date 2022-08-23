
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";


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
        fill(200,0,0);
        push();

        translate(lox,150);
        ellipse(0,0,30,30);
        if (lox > width) {
          lox = 0;
        }
         lox  ++;

        pop();


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
   //this.ghosty = createSprite(this.lox, this.loy);
    // var ghosty = createSprite(lox,loy);

  this.setup = function() {
      console.log("We are at setup for scene2");
    // ghosty.position.x++;
    ghosty.position.x++;

  }

  this.enter = function()
  {
      console.log("We are at entering scene2");
        console.log(hell);
    ghosty.position.x = 250;
    ghosty.position.y = 280;
    ghosty.changeAnimation("normal");

    ghosty.onMouseOver = function() {

      console.log("over");
      this.changeAnimation("stand");
      this.position.x = width/2;
      this.position.y = height/2;
    }

    ghosty.onMouseOut = function() {

      console.log("out");
      this.changeAnimation("stand");
      this.position.x++ ;
      this.position.y++;
    }



  }




    this.draw = function()
    {
        background("red");
        drawSprites();
    }

    this.keyPressed = function() {


       if ( !snd2.isPlaying() ) {
          snd2.play();
        }



    }

    this.mousePressed = function()
    {
      //console.log("woot");
      // ghost.changeAnimation("stand");
        this.sceneManager.showNextScene();
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

     //ghosty.visible = false;
     ghosty.position.x = 250;
     ghosty.position.y = 280;


     ghosty.onMouseOver = function() {

       console.log("over");
       this.changeAnimation("stand");
       this.position.x-=5 ;
       this.position.y-=5 ;
     }

     ghosty.onMouseOut = function() {

       console.log("out");
       this.changeAnimation("stand");
       this.position.x+=5;
       this.position.y+=5;
     }


        console.log("We are at entering scene2");
    }




    this.draw = function() {
        background("black");
        drawSprites();
        var r = sin( frameCount * 0.01 );

        fill("red");
        noStroke(0);
        ellipse( width / 2, height / 2, map(r, 0, 1, 100, 200) );

        if ( oAnim1 != null )
        {
            fill("black");
            textAlign(LEFT);
            text( "Scene3 r: " + r, 10, height - 20);
        }
    }


    this.keyPressed = function() {


       if ( !snd3.isPlaying() )
       {
          snd3.play();
        }
        {
           snd1.stop();
           snd2.stop();
         }



    }


    this.mousePressed = function()  {

       this.sceneManager.showNextScene();
    }

}
