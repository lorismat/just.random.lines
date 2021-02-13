const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;

const inter = 0.05;
const start = W/4;
const stop = W/4 + 30;
const diff = 10;
const low_sat = 50;
const high_sat = 100;
const size = 1.5;

let xoff_stroke = 0;

const r = W / 6;

$("#refresh").click(function() {
	setup();
});


function setup() {
	let myCanvas = createCanvas(W, H);
  myCanvas.parent("myCanvas");
}

function draw() {
	background(0, 100, 0, 5);
	colorMode(HSB, 360, 100, 100, 100);
	
	translate(W / 2, H / 2)
	noStroke();


	let x = [];
	let y = [];

	let xoff = 10;

	for (let a = 0; a < TWO_PI; a += inter) {
		for (let i = 0; i < stop - start; i++) {
			x = ((start + (i * diff)) * cos(a)) + random(-8, 8);
			y = ((start + (i * diff)) * sin(a)) + random(-8, 8);
			fill(noise(xoff) * 360, random() * (high_sat - low_sat) + low_sat, 100, 100);
			circle(x, y, size);
		}
		xoff += 0.03;
	}

	stroke("#fff");
	noFill();
	strokeWeight(map(noise(xoff_stroke), 0, 1, 20, 35))
	circle(0, 0, W / 3)
	xoff_stroke += 0.1;
}
