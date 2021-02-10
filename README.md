# just random lines

[justrandomlines.com](http://www.justrandomlines.com/)  

_A sandbox collecting some experimentations with_ `p5.js` 

All `p5.js` canvas are available in the `static/js/canvas/` directory.  
Each file matches with its url on the website.   

The rest of the repository includes a `flask` backend, dependencies and files to run with `heroku`.

### Can I use the code?

Feel free to reuse any part of the website, for any purpose. 

### How to use the code?

For `p5.js` related code, I suggest you use the [p5.js online editor](https://editor.p5js.org/).  
You will have to modify the javascript code just a little bit, **here is how**:  

In every `static/js/canvas/` file, you will see the following structure:  
```
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
```  

To make it run in the `p5.js` editor, you will need to keep the whole code, with some changes:
- remove the `dims` variable
- replace `H` and `W` values with numbers relative to the height and width of your canvas
- remove the `jQuery` statement on click -only used on the website.
- remove the `myCanvas` variable. Instead, just call `createCanvas(W,H)`

**Example**: let's use above code in the online editor:  
```
const W = 400;
const H = 400;

function setup() {
	createCanvas(W, H);
}

function draw() {
	fill("#698");
	rect(0,0,W,H);
}
```

