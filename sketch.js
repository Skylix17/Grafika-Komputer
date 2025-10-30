let x = 300;
let speedX = 5;
let y = 300;
let speedy = 3;

function setup() {
  createCanvas(600, 600);
  background(78, 19, 187);
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255), random(255))
  circle(x, y, random(100));
  x += speedX;
  y += speedy;

  if (x + 50 >= width || x - 50 <= 0) {
    speedX *= -1;
  }
  
  if (y + 50 >= width || y - 50 <= 0) {
    speedy *= -1;
  }
}