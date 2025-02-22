
function changeColor(selector, color) {
    console.log(selector, color);
    const element = document.querySelector(selector);
        if(element.style.backgroundColor === color){
            element.style.backgroundColor = "white";
        } else {
            element.style.backgroundColor = color;
        }

}

function reset(){

    //const section = document.querySelectorAll('.myselection');

    document.querySelector('#section1').style.backgroundColor = 'transparent';
    document.querySelector('#section2').style.backgroundColor = 'transparent';
    document.querySelector('#section3').style.backgroundColor = 'transparent';
    document.querySelector('#section4').style.backgroundColor = 'transparent';
}
//also function changeColor(selector, color){}


// const makeRed = () => {
//     // your code here...
//     console.log('Change background to red');
//     document.querySelector('#section1').style.backgroundColor = 'red';
// };

// const makeBlue = () => {
//     // your code here...
//     console.log('Change background to blue');
//     document.querySelector('#section2').style.backgroundColor = 'blue';

// };

// const makePink = () => {
//     // your code here...
//     console.log('Change background to pink');
//     document.querySelector('#section3').style.backgroundColor = 'pink';

// };

// const makeOrange = () => {
//     // your code here...
//     console.log('Change background to orange');
//     document.querySelector('#section4').style.backgroundColor = 'orange';

// };

