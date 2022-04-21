var fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight*0.93);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(12.5);
  if (random(0, 1) < 0.04) {
    fireworks.push(new Firework([random(0, width), random(height*0.5, height)], random(0, width), random(0, height*0.5), [random(255), random(255), random(255)], 250, 2));
  }

  var next = [];
  for (var i = 0; i < fireworks.length; i++) {
    if (!fireworks[i].done()) {
      next.push(fireworks[i]);
      fireworks[i].update();
      fireworks[i].show();
    }
  }
}
