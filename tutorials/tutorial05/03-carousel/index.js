let currentPosition = 0;
let gap = 10;
const slideWidth = 400;

function moveCarousel(direction) {
    const items = document.querySelectorAll(".carousel-item");  //document.querySelector for all items with 
                                                                // a class called carousel-item

    if (direction == "forward") {      //if moveCarousel calls forward, move images forward (currentPosition++)
        // minus 2 b/c first 2 slides already showing
        if (currentPosition >= items.length - 2) {
            return false;
        }
        currentPosition++;
    } else {
        if (currentPosition == 0) {
            return false;
        }
        currentPosition--; //else-- moveCarousel must have called backward, decrement and move back 
    }

    const offset = (slideWidth + gap) * currentPosition;

    for (const item of items) {
        item.style.transform = `translateX(-${offset}px)`;
    }
}
