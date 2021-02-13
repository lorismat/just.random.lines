// inspiration:
// https://p5js.org/examples/math-noise1d.html
// ---

const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;

let xinc = 0.01;

let nb_points = 200;
let xoff = [];


$("#refresh").click(function() {
	setup();
});

function setup() {
	let myCanvas = createCanvas(W, H);
  myCanvas.parent("myCanvas");
}

function draw() {
  let nb_circles = floor(W/50);
	fill(0, 10);
	rect(0, 0, W, H);
	randomSeed(4);
	noStroke();
	translate(W / 2, H / 2);
  
  for (let j = 0; j < nb_circles; j++) {
    let r = 100 + j*30;
    xoff.push(random(100));
    for (let i = 0; i < nb_points; i++) {
		let t = random(2 * PI);
		colorMode(HSB, 360, 100, 100, 100)
		fill(random(70,80), random(50) + 50, random(50) + 50);
		let x = r * cos(t + noise(xoff[j]));
		let y = r * sin(t + noise(xoff[j]));
		ellipse(x, y, 10, 10);
  }
    xoff[j] += xinc;
  }
}
