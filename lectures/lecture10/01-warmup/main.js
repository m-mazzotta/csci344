let canvasWidth = document.documentElement.clientWidth - 10;
let canvasHeight = document.documentElement.clientHeight - 10;

// in p5.js, the function runs on page load:
function setup() {
    rectMode(CENTER);
    createCanvas(canvasWidth, canvasHeight);

    //mouseDraggedColor();

    mouseClicked();


}

// in p5.js, special event handler that listens for click events:
function mouseClicked() {
    // in p5.js, mouseX and mouseY are
    // built-in global variabls that track the
    // current position of your mouse.

    // circle(mouseX, mouseY, 100);
    // let r = Math.random() * 255;
    // let g = Math.random() * 255;
    // let b = Math.random() * 255;
    //shapeDrawer();


    bullsEye();
}

// in p5.js, special event handler that listens for drag events:
function mouseDragged() {
    // square(mouseX, mouseY, 100);
    // circle(mouseX, mouseY, 100);
    bullsEye();

    
}

function shapeDrawer(){
circle(mouseX, mouseY, 100);
let r = Math.random() * 255;
let g = Math.random() * 255;
let b = Math.random() * 255;
    fill(r,g,b);
    circle(mouseX, mouseY, 100);

    let color = getColor();
    fill(...color);

    let squareChance = Math.random() * 10;
    if(squareChance < 5){
        circle(mouseX, mouseY, Math.random);
    } else {
        square(mouseX, mouseY, Math.random);
    }
}

function bullsEye(){
    fill(getColor());
    circle(mouseX, mouseY, 300);
    fill(getColor());
    circle(mouseX, mouseY, 250);
    fill(getColor());
    circle(mouseX, mouseY, 200);
    fill(getColor());
    circle(mouseX, mouseY, 150);
    fill(getColor());
    circle(mouseX, mouseY, 100);
    fill(getColor());
    circle(mouseX, mouseY, 50);
    fill(getColor());



}


function getColor(){
    let r = mouseY % 255;
    let g = mouseY % 255;
    let b = ((mouseX * mouseY) % 255);

    return [r,g,b];
}


//different colors
//const colors = ["violet" , "lightpink", "lightblue", "lightgreen"];

function mouseDraggedColor() {
    for(let i = 0; i < 100; i++){
        fill(colors[i %  colors.length]);
        

        let mouseX = (Math.random() * 1300);
        let mouseY = (Math.random() * 800);
        //let d = Math.random() * 40;

    square(mouseX, mouseY, 100);
    circle(mouseX, mouseY, 100);

    }
    
}

/**
 * Challenges:
 * 1. As you click / drag, can the circles have different colors and sizes?
 *      * Try using the Math.random() function
 * 2. Can you make the click / drag sometimes make circles and sometimes make rectangles
 *      * Sample rectangle function invocation: rect(mouseX, mouseY, 100, 100);
 * 3. Can you make each click create a bulleye of different colors?
 *      * Hint: make sure you draw the bigger circles before you draw the smaller circles.
 */
