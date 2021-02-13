const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;

const palette = ["#2ecc71", "#e67e22", "#8e44ad", "#16a085", "#f39c12"];

const gap_circles = 10;
let noiseMax = 0.1;
let phase = 0;

$("#refresh").click(function() {
	setup();
});

function setup() {
	let myCanvas = createCanvas(W, H);
  myCanvas.parent("myCanvas");
}

function draw() {
    noiseSeed(99)
    background("#FFFFFF10");
    translate(W / 2, H / 2);
    strokeWeight(3);
    noFill();
    randomSeed(42);
    for (i = 0; i < palette.length; i++) {
        stroke(palette[i]);
        beginShape();
        for (a = 0; a < TWO_PI; a += 0.1) {
            xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
            yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
            let r = map(noise(xoff, yoff), 0, 1, W / 6 + (i * gap_circles), W / 4 + (i * gap_circles));
            let x = r * cos(a);
            let y = r * sin(a);
            vertex(x, y);
            phase += 0.1;
        }
        endShape(CLOSE);
    }
};
