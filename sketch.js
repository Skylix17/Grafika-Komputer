// User defined variable
// EVENT
function setup() {
  createCanvas(600, 600);
  background(78, 19, 187);
}

function draw() {
  stroke(random(255), random(255), random(255));
  line(300, 300, mouseX, mouseY);
}