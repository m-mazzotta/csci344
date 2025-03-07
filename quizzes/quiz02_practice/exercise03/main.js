// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/spring/`;
    courseList = await fetch(url).then(response => response.json());
    displayResults(courseList);
} 

function displayResults(courses) {
    // your code here.
    console.log(courses); //array of approx. 1000 course objects. output for all? 
    const container = document.querySelector("#results"); //string and id
    for(const course of courses){ //visit each course
        //console.log(course.Title);
        //look at only the csci courses:
        //only want to print if true
        if(course.Department === "CSCI"){
            //add title of all csci courses to the dom
            console.log(course.Title);
            const htmlSnippet = `
            <div>
            <h2>${course.Title}</h2>
            <p>${course.Instructors[0].Name}</p>
            <p>${course.Location.FullLocation}</p>
            <p>${course.Days}</p>

            </div>
            `;
            //add to containers
            container.insertAdjacentHTML("beforeend", htmlSnippet);
        }
    }
}