var bodies = [];
let myFont;

function preload() {
  myFont = loadFont("assets/renens-bold-webfont.woff");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  world = b2newWorld(32, b2V(0, 10)); //32 converts pixels to meters
  // var b = new b2Body("polygon", true, b2V(200, 200), [
  //   b2V(20, 0),
  //   b2V(-20, 0),
  //   b2V(0, 30),
  // ]);
  //b = new b2Body("circle", true, b2V(200, 100), b2V(20, 20));
  // b.addTo("box", b2V(0, 15), b2V(20, 10));
  new b2Body("edge", false, b2V(width / 2, height - 4), [
    b2V(-width / 2, 0),
    b2V(width / 2, 0),
  ]);

  textFont(myFont);
  textSize(92);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  text("body count=" + b2world.getBodyCount(), 20, 20);
  text("click mouse to drop polygons", width / 2, 20);
  b2Update();
  b2Draw();
}

function mousePressed() {
  // var b = new b2Body(
  //   "polygon",
  //   true,
  //   b2V(mouseX, mouseY),
  //   [b2V(0, 0), b2V(0, 0), b2V(0, 0)],
  //   { display: userDraw }
  // );
  // b.number = "a";
  // b.force = b2V(400, 0);
  // bodies.push(b);
}

function userDraw(body) {
  //fill("red");
  //body.draw();
  fill("white");
  text(body.number, 0, -20);
}

function keyPressed() {
  if (key >= "a" && key <= "z") {
    var b = new b2Body("circle", true, b2V(width / 2, -100), b2V(100, 0), {
      display: userDraw,
    });
    console.log(key);
    b.number = key;
    b.force = b2V(400, 0);
  }
  //bodies.push(b);
}
