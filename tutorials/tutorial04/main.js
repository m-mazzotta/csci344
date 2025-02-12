let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    // set up canvas
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    // draw5Circles();
    // // // draw5RedSquares();
    // draw5CirclesFor();

    // drawNCircles(20);

    // drawNCirclesFlexible(30, 25, 400, 0);
    // drawNCirclesFlexible(4, 100, 100, 200);
    // drawNCirclesFlexible(8, 50, 700, 100);

    // drawNShapesFlexible(30, 30, 335, 0, "square");
    // drawNShapesFlexible(4, 100, 120, 200, "circle");
    // drawNShapesFlexible(8, 50, 725, 25, "square");

    // drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
    // drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
    // drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");

    drawRand();

    // draw grid
    drawGrid(canvasWidth, canvasHeight);
}

// my first function
// draw five circles while
function draw5Circles() {
    noFill();
    // fill('red');
    let x = 100;
    let y = 100;
    let d = 50;

    let i = 0;
    while(i<5){
        circle(x, y + 50 * i, d); // centerX, centerY, radius
        i++;

        // refactoring
        //if i is even: make pink
        //else: make teal

        // if(i % 2 ==0){
        //     fill("violet");
        // }else {
        //     fill("lightblue");
        // }
        // //fill("green");
        // circle(500, y, d);
        // //fill("red");
        // circle(600, y, d);
        // //fill("yellow");
        // circle(x,y,d);
        // y+=10;
        // d+=5;
        // i++

    }
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);
}

function draw5RedSquares() {
    fill("red");
    square(320, 200, 50); // topLeftX, topLeftY, width
    square(320, 250, 50);
    square(320, 300, 50);
    square(320, 350, 50);
    square(320, 400, 50);
}

function draw5CirclesFor() {
    noFill();
    let x = 400;
    let y = 100;
    let d = 50;

    for(let i=0; i < 5; i++){
        circle(x, y + 50 * i, d); // centerX, centerY, radius
    }
}

function drawNCircles(n){
    noFill();

    let x = 600;
    let y = 100;
    let d = 50;

    for(let i=0; i < n; i++){
        circle(x, y + 50 * i, d);
    }

}

function drawNCirclesFlexible(n, size, x, y){
    noFill();

    for(let i=0; i < n; i++){
        circle(x, y + size * i, size);
    }
}

function drawNShapesFlexible(n, size, x, y, shape){
    fill("violet");

    for(let i=0; i < n; i++){
        if(shape == "circle"){
            circle(x, y + size * i, size);
        } else if (shape == "square") {
            square(x, y + size * i, size);
        }
    }
}

function drawNShapesDirectionFlexible(n, size, x, y, shape, direction){
    fill("lightgreen");

    for(let i=0; i < n; i++){
       
        if(direction == "row"){
            x += size;
        } else if(direction == "column"){
            y += size;
        }

        if(shape == "circle"){
            circle(x, y, size);
        } else if (shape == "square") {
            square(x, y, size);
        }
    }
}

const colors = ["violet", "lightgreen", "lightpink"];

function drawRand(){
    for(let i = 0; i < 100; i++){
        fill(colors[i %  colors.length]);

        let x = (Math.random() * 1300);
        let y = (Math.random() * 800);
        let d = Math.random() * 40;


         circle(x, y, d);
    }

}