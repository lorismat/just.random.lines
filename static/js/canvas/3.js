// inspiration:
// Daniel Shiffman's Flow Field
// https://thecodingtrain.com/CodingChallenges/024-perlinnoiseflowfield.html
// ---

const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;


const scl = 10;
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
  cols = floor(H/scl)+5;
  rows = floor(W/scl)+5;
}

function draw() {
  colorMode(HSB, 360, 100, 100, 100);
  background(255);
  stroke(0);  
  yoff = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      xoff += xinc;
      noStroke();
      push();
      translate(i * scl, j * scl);
      fill(360*noise(xoff, yoff, zoff),100,100, 100);
      circle(0, 0, scl*noise(xoff, yoff, zoff));
      pop();
    }
    xoff = 0;
    yoff += yinc;
  }
  zoff += zinc;
}
