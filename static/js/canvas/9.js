const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;

let particles = [];
let particles_nb = W/2;

$("#refresh").click(function() {
	setup();
});

function Particle() {
	translate(W / 2, H / 2);

	this.pos = createVector(random(W), random(H));
	this.vel = createVector(random(-1, 1), random(-1, 1));
	this.acc = createVector(0, 0);

	this.update = function() {
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
	}

	this.show = function() {
		stroke(107, random(80) + 20, random(80) + 20, 100);
		circle(this.pos.x, this.pos.y, 1)
	}

	this.edges = function() {
		if (this.pos.x > W) {
			this.pos.x = 0;
		}
		if (this.pos.x < 0) {
			this.pos.x = W;
		}
		if (this.pos.y > H) {
			this.pos.y = 0;
		}
		if (this.pos.y < 0) {
			this.pos.y = H;
		}
	}
}

function setup() {
	let myCanvas = createCanvas(W, H);
  myCanvas.parent("myCanvas");
	for (i = 0; i < particles_nb; i++) {
		particles[i] = new Particle();
	}
}

function draw() {
	colorMode(HSB, 360, 100, 100, 100);
	for (i = 0; i < particles_nb; i++) {
		particles[i].update();
		particles[i].show();
		particles[i].edges();
	}
}
