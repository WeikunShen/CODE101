

// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up, image2_over,img,snd1,snd2,snd3,snd4,snd5,snd6;
// var duration;
// var  slideWidth = 500;

function preload() {

   img = loadImage('assets/room1.png');
   flight1 = loadImage('assets/flight1.png');
    flight2 = loadImage('assets/flight2.png');
     flight3 = loadImage('assets/flight3.png');
      flight4 = loadImage('assets/flight4.png');
   snd1 = loadSound("sound/fire.mp3");
   snd2 = loadSound("sound/sofa.mp3");
   snd3 = loadSound("sound/coffee.mp3");
   snd4 = loadSound("sound/jazz.mp3");
   snd5 = loadSound("sound/relax.mp3");
   snd6 = loadSound("sound/book.mp3");



}


// define your p5.play sprites as global objects first.
var fire;
var song;



// global manager object
var mgr;

function setup() {
    createCanvas(800, 600);
  //  console.log(hell);
     mgr = new SceneManager();
     masterVolume(.8);

    fire = createSprite(0, 0);
    song = createSprite(0, 0);

     //fire.addAnimation("normal", "assets/ghost_spin0001.png",  "assets/ghost_spin0003.png");
   //fire.addAnimation("stand", "assets/ghost_standing0001.png",  "assets/ghost_standing0007.png");
   //fire.addAnimation("stand", "assets/room1.png",  "assets/room1.png",  "assets/room1.png",  "assets/room1.png");
   fire.addAnimation("normal", "assets/fire1.png",  "assets/fire2.png",  "assets/fire3.png");
   song.addAnimation("normal", "assets/song1.png",  "assets/song2.png", "assets/song3.png");
  // fire.addAnimation("stand", "assets/room1.png", "assets/room1.png", "assets/room1.png" );
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);

    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case 'm':
            mgr.showScene( scene1 );
            break;
        case 'h':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
