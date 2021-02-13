// inspiration:
// Concept by Anders Hoff
// https://inconvergent.net
// And this p5.js example producing the circle
// https://p5js.org/examples/math-random-chords.html

const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;
const outside = 30;
const inside = 15;
const r = W/4;
let inc = 0;

$("#refresh").click(function() {
	setup();
});

function setup() {
	let myCanvas = createCanvas(W, H);
  myCanvas.parent("myCanvas");
  background(255);
}

function draw() {
  for (let i = 0; i < outside; i++) {
    stroke(0);
    strokeWeight(0.1);
    line(random(W),random(H),random(W),random(H));
  }
  for (let i = 0; i < inside; i++) {
    stroke(255);
    strokeWeight(0.5);
    a1 = random(TWO_PI);
    a2 = random(TWO_PI);
    x1 = W/2 + r * cos(a1);
    y1 = H/2 + r * sin(a1);
    x2 = W/2 + r * cos(a2);
    y2 = H/2 + r * sin(a2);
    line(x1,y1, x2, y2);
  }
}
