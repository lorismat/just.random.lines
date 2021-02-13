// inspiration:
//
// ---

// watching frame rate, for the p5.js editor, to be removed on the website
let fr;

const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;

$("#refresh").click(function() {
	setup();
});

function setup() {
	// fr for the p5.js editor, to be removed on the website
	fr = createP('');
	let myCanvas = createCanvas(W, H);
  myCanvas.parent("myCanvas");
}

function draw() {
	// fr for the p5.js editor, to be removed on the website
	fr.html(floor(frameRate()));
}
