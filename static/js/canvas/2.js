// inspiration:
// Daniel Shiffman's Flow Field
// https://thecodingtrain.com/CodingChallenges/024-perlinnoiseflowfield.html
// ---

const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;

const scl = 15;
let cols, rows;

let xoff = 0;
let yoff = 0;
let zoff = 0;
let xinc = 0.1;
let yinc = 0.05;
let zinc = 0.01;

$("#refresh").click(function() {
	xoff = random(100);
	yoff = random(10);
	zoff = random(50);
	setup();
});

function setup() {
	let myCanvas = createCanvas(W, H);
  myCanvas.parent("myCanvas");
  cols = floor(H/scl)+2;
  rows = floor(W/scl)+2;
}

function draw() {
  background(255);
  stroke(0);
  
  yoff = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let angle = noise(xoff, yoff, zoff) * TWO_PI/2;
      let v = p5.Vector.fromAngle(angle);
      xoff += xinc;
      stroke(0);
      push();
      translate(i * scl, j * scl);
      rotate(v.heading());
      rect(0, 0, scl, scl);
      pop();
    }
    xoff = 0;
    yoff += yinc;
  }
  zoff += zinc;
}
