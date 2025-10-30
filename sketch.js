// User defined variable
// EVENT
size = 60
function setup() {
  createCanvas(600, 600);
  background(78, 19, 187);
}

function draw() {
  fill(random(255), random(255), random(255))
  circle(mouseX, mouseY, size);
  if (mouseIsPressed) {
    size -= 2;
  }
}