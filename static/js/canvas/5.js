// inspiration:
// Daniel Shiffman's Blobby 
// https://thecodingtrain.com/CodingChallenges/036-blobby.html 
// ---

const dims = document.getElementById('myCanvas').getBoundingClientRect();

const W = dims.width;
const H = dims.height;

let nb_circles = W/50;
let noiseMax = 20;
let zoff = 1;

$("#refresh").click(function() {
    setup();
});


setup = function() {
    let myCanvas = createCanvas(W, H);
    myCanvas.parent("myCanvas");
};

draw = function() {

    background(0);

    noiseSeed(99)
    translate(W / 2, H / 2)
    stroke(255);
    noFill();
    for (i = 0; i < nb_circles; i++) {
        beginShape();
        for (a = 0; a < TWO_PI; a += 0.05) {
            xoff = map(cos(a), -1, 1, 0, noiseMax);
            yoff = map(sin(a), -1, 1, 0, noiseMax);
            // calling a 2D Perlin Noise
            let r = map(noise(xoff, yoff, i + zoff), 0, 1, (W / 4 + i * 10), (W / 4 + 10 + i * 10));
            let x = r * cos(a);
            let y = r * sin(a);
            vertex(x, y);
        }
        endShape(CLOSE);
    }
    zoff += 0.03;

};
