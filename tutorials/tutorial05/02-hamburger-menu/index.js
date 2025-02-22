// Your code here.

//When the hamburger menu is clicked when the menu is hidden, 
// the active class is added to both the button and ul elements.
function toggleMenu(){
    const navlinks = document.querySelector('.nav-links');
    const button = document.querySelector('#menu-toggle');

    navlinks.classList.toggle("active");
    button.classList.toggle("active");


    // if(navlinks.className === "nav-links active"){
    //     navlinks.className = "nav-links";
    // } else {
    // navlinks.className = "nav-links active";


    //navlinks.classList.add('.active');
}

//When the hamburger menu is clicked when the menu is visible, the active class is removed 
// from both the button and ul elements.
