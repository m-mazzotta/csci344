// global variables tracking the user's preferences:
let searchTerm = "";
let openOnly = false;

const search = (ev) => {
    ev.preventDefault(); // overrides default button action

    // Set user's preferences (global variables) from the DOM:
    searchTerm = document.querySelector("#search_term").value;
    openOnly = document.querySelector("#is_open").checked; //only show open classes
    console.log(searchTerm, openOnly);

    // Invoke the show matching courses function
    showMatchingCourses();
};

// Part 1.1a
const isClassFull = (course) => { //visit course one bty one, is EnrollmentCurrent greater than EnrollmentMax
    // modify this to accurately apply the filter:
    return course.EnrollmentMax <= course.EnrollmentCurrent;
};

// Part 1.1b
const doesTermMatch = (course) => {
    // modify this to accurately apply the filter:
    // searchTerm(web) --- how do we know this is relevant to web dev?
    // arr.includes(web)

    //course?instructor?title?
    let match = false;

    //title check
    if(course.Title.toLowerCase().includes(searchTerm.toLowerCase())){
        match = true;
    } else {
        return false;
    }
    //instructor check
    // if(course.Instructor.toLowerCase().includes(searchTerm.toLowerCase)){
    //     match = true;
    // } else {
    //     return false;
    // }

    return match;
};

// Part 1.2 //convert data object to html snippet
const dataToHTML = (course) => {
    // modify this to be more detailed
    let status; 
    // check open/closed
    if(isClassFull(course)){
        status = `<i class="fa-solid fa-circle-xmark"></i> Closed`;
    } else {
        status = `<i class="fa-solid fa-circle-check"></i> Open`;
    }

    // get rid of negatives
    let seatsAvailable = course.EnrollmentMax - course.EnrollmentCurrent;
        if(seatsAvailable < 0){
            seatsAvailable = 0;
        }

    return `
       <section class="course">
            <h2>${course.Code}: ${course.Title}</h2>
            <p>
                ${status}  &bull; ${course.CRN} &bull; Seats Available: ${seatsAvailable}
            </p>
            <p>
                ${course.Days || "TBD"} &bull; ${course.Location.FullLocation || "TBD"} &bull; ${course.Hours} credit hour(s)
            </p>
            <p><strong>${course.Instructors[0].Name}</strong></p>
        </section>
    `;
};

// Part 2
const showMatchingCourses = () => {
    console.log(`Search term: ${searchTerm}`);
    console.log(`Only show open classes: ${openOnly}`);
    console.log(`Course data:`, courseList);

    // output all of the matching courses to the screen:
    //variable that holds container
    const container = document.querySelector(".courses"); //want to clear container so that old results dont show
    container.innerHTML = "";

    //filter by search term
    let matches = courseList.filter(doesTermMatch); //matches is array holding relevant courses

    //now that have right ones, loop through and output
    matches.forEach(course => {
        const snippet = dataToHTML(course); //convert each course to a snippet of html
        console.log(snippet);
        //now want to get into DOM. -- actuallly add htmlsnippet to the dom
        container.insertAdjacentHTML("beforeend", snippet);
    }); 
};
