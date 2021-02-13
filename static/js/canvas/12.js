// inspiration:
//
// ---

const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;

$("#refresh").click(function() {
	setup();
});

function setup() {
	let myCanvas = createCanvas(W, H);
  myCanvas.parent("myCanvas");
}

function draw() {
}
