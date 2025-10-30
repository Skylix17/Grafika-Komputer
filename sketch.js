// User defined variable
// EVENT
function setup() {
  createCanvas(600, 600);
  background(78, 19, 187);
}

function draw() {
  line(pmouseX, pmouseY, mouseX, mouseY);
}