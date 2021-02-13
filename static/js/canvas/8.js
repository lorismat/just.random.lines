// inspiration: 
// Daniel Shiffman's wave
// https://p5js.org/examples/math-noise-wave.html
// ---

let yoff = 0.0;

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
    noStroke();

    background("#ca1212");
    colorMode(HSB, 360, 100, 100);
    fill(350, 100, 100)
    circle(W / 2 + W / 4, H / 2, W / 4);
    fill("#fff");

    for (i = 0; i < 10; i++) {

        beginShape();
        strokeWeight(1);
        stroke(0);
        let xoff = 0;
        for (let x = -10; x <= W + 10; x += 4) {

            let y = map(noise(i + xoff, i + yoff), 0, 1, H / 3, H);

            vertex(x, y);
            xoff += 0.008;
        }
        yoff += 0.0003;
        vertex(W, H + 10);
        vertex(0, H + 10);
        endShape(CLOSE);
    }
}
