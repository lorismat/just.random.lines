const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;

$("#refresh").click(function() {
	inc = 0;
	setup();
});

const nb_circles = 200;

let r = W/5;
let inc = 0;

function setup() {
	let myCanvas = createCanvas(W, H);
  myCanvas.parent("myCanvas");
}

function draw() {
  colorMode(HSB, 360, 100, 100, 100);
  translate(W/2, H/2);

	push();
	fill("#000");
	circle(W/4+W/2, H/4, W/6);

  
  for (let i = 0; i < nb_circles; i++) {
    
    //stroke(180, random(100), random(100), 100-inc);
		stroke(0,100,0,100-inc);
    let a = random(TWO_PI);
    let x = (r+random(inc)) * cos(a);
    let y = (r+random(inc)) * sin(a);
    
    circle(x, y, 1);
  }
  inc += 0.3;
}
