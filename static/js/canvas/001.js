// inspiration:
// Daniel Shiffman's Flow Field
// https://thecodingtrain.com/CodingChallenges/024-perlinnoiseflowfield.html
// ---

const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height -20;

const scl = 10;
let cols, rows;

let xoff = 0;
let yoff = 0;
let zoff = 0;
let xinc = 0.1;
let yinc = 0.05;
let zinc = 0.001;

const particles_nb = parseInt(W/2);
const maxSpeed = 1;
const magn = 10;
const alph = 40;

let particles = [];
let flowfield = [];

$("#refresh").click(function() {
	setup();
});

function setup() {

	let myCanvas = createCanvas(W, H);
  myCanvas.parent("myCanvas");

  cols = floor(H/scl);
  rows = floor(W/scl);

  flowfield = new Array(cols * rows);

  for (let i = 0; i < particles_nb ; i++) {
    particles[i] = new Particle();
  }
}

function Particle() {
  this.pos = createVector(random(W-2*W/4)+W/4,20);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxSpeed = maxSpeed;

  this.prevPos = this.pos.copy();

  this.udpate = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    // resetting the accelaration to 0
    this.acc.mult(0);

  }

  this.follow = function(vectors) {
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    colorMode(HSB,360,100,100,100);
    stroke(193,random(60)+40,random(60)+40, alph);

    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)

    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function() {
    if (this.pos.x > W)
    {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0)
    {
      this.pos.x = W;
      this.updatePrev();
    }
  }
}

function draw() {
  stroke(0);

  yoff = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      let index = i + j * cols;

      let angle = noise(xoff, yoff, zoff) * TWO_PI / 2;
      let v = p5.Vector.fromAngle(angle);

      v.setMag(magn);

      // all the vectors we are creating are stored in the flowfield array
      flowfield[index] = v;

      xoff += xinc;

      // visualize the vectors
      /*
      stroke(0, 0, 0, 50);
      push();
      translate(i * scl, j * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
      */
    }
    xoff = 0;
    yoff += yinc;
  }

  zoff += zinc;

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].udpate();
    particles[i].edges();
    particles[i].show();

  }
}
