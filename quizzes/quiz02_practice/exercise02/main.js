const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawMonster(100, 100, 150, '#0bc9cd', false);
    drawMonster(300, 200, 75, '#8093f1', true);
    drawMonster(100, 325, 100, '#8093f1', false);
    drawMonster(250, 375, 125, '#7fb285', true);
    drawMonster(550, 200, 250, '#7fb285', false);


    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:
function drawMonster(x, y, size, color, isSuprised){


    rectMode(CENTER);
// Make face rectangle (x,y,width, height)

fill(color);
rect(x, y, size, size);
fill("white");

const leftEyeX = x - size / 3;
const leftEyex = x + size / 4;

const eyeWidth = size / 5;
const eyeY = y - size / 4;

const pupilWidth = size / 10;

const rightEyeX = x - size / 3;
const rightEyeY = y + size / 4;

rect(leftEyeX, eyeY, eyeWidth, eyeWidth);
rect(rightEyeX, eyeY, eyeWidth, eyeWidth);

fill("black");
rect(leftEyeX, eyeY + size / 20, pupilWidth, pupilWidth);
rect(rightEyeX, eyeY + size / 20, pupilWidth, pupilWidth);


// Set colors to white
// Two more smaller rectangles (math to x,y, width, height, to position them correctly)
// Set color to black
// Make two pupils
// Make mouth (if else)
        if(isSuprised === true){

        }


}
