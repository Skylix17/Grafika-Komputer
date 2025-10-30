// User defined variable
// EVENT
x = 300;
y = 300;
size = 80;

function car(x, y, size) {
  rectMode(CENTER);
  fill(255, 0, 0);
  rect(x, y, size + 70, size, 12, 12, 0, 0);
  fill(0);
  circle(x - 30, y + 40, size - 25);
  circle(x + 35, y + 40, size - 25);
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(78, 19, 187);
  if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      y -= 4;
    } else if (keyCode === DOWN_ARROW) {
      y += 4;
    } else if (keyCode === LEFT_ARROW) {
      x -= 4;
    } else if (keyCode === RIGHT_ARROW) {
      x += 4;
    }
  }

  if (x - size / 2 >= width) {
    x = 0 - size / 2;
  } else if (x + size / 2 <= 0) {
    x = width + size / 2;
  }
  if (y - size / 2 >= height) {
    y = 0 - size / 2;
  } else if (y + size / 2 <= 0) {
    y = height + size / 2;
  }
  car(x, y, size);
}