var bubbly;
// var neutral;


function preload() {
  bubbly = loadAnimation("https://cdn.glitch.me/f39dcdc9-b2d0-4c4b-80d0-cf249bcaa8ab%2Fbubbly0001.png?v=1638563407505", "https://cdn.glitch.me/f39dcdc9-b2d0-4c4b-80d0-cf249bcaa8ab%2Fbubbly0002.png?v=1638563417869", "https://cdn.glitch.me/f39dcdc9-b2d0-4c4b-80d0-cf249bcaa8ab%2Fbubbly0003.png?v=1638563425407",
                         "https://cdn.glitch.me/f39dcdc9-b2d0-4c4b-80d0-cf249bcaa8ab%2Fbubbly0004.png?v=1638563434007");
  // neutral = loadAnimation("https://cdn.glitch.me/f39dcdc9-b2d0-4c4b-80d0-cf249bcaa8ab%2FNeutral%20face%2001.pdf?v=1638934439400");
}

function setup() {
  createCanvas(1500, 1000);
}

function draw() {
  background(255);
  animation(bubbly, 500, 300);
  // animation(neutral, 100, 300);
  text('Hi, I caused my creator a gReAt deal of stress', 380, 200);
  text('My name is Bubs.', 450, 400);
}

// function setup() {
//   createCanvas(800, 400);
// }

// function draw() {
//   background(255, 255, 255);

//   fill(0);
//   textAlign(CENTER);
//   text('Click to create a new sprite', width/2, height/2);
//   //draw all the sprites added to the sketch so far
//   //the positions will be updated automatically at every cycle
//   drawSprites();
// }

// function mousePressed() {

//   //create a sprite at the mouse position and store it in a temporary variable
//   var s = createSprite(mouseX, mouseY, 30, 30);
//   //if no image or animation is associated it will be a rectancle of the specified size
//   //and a random color

//   //now you can use the variable to set properties
//   //e.g. a random velocity on the x and y coordinates
//   s.velocity.x = random(-5, 5);
//   s.velocity.y = random(-5, 5);
// }
