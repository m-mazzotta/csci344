import { getAccessToken } from "./utilities.js";
const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "mira";
let password = "password";

async function initializeScreen() {
    // this function is getting invoked when the page first loads:
    token = await getAccessToken(rootURL, username, password);
    showNav();
    // get posts:
    getPosts();
    getStories();
    getSuggestions();
}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:
//await / async syntax:
async function getPosts() {
    const response = await fetch(
        "https://photo-app-secured.herokuapp.com/api/posts/?limit=10",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const data = await response.json();
    console.log(data);
    renderPosts(data);
}

async function getProfile(){
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/profile/", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const data = await response.json();
    console.log(data);

}

async function getStories(){  
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/stories/", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const data = await response.json();
    console.log(data);
    renderStories(data)
}

function renderStories(storiesListJSON){
    storiesListJSON.forEach(renderStory);

}

function renderStory(storiesJSON){
    const template = `
    
    <header class="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
            <div class="flex flex-col justify-center items-center">
                <img src="${storiesJSON.image_url}" alt="profile photo"rounded-full border-4 border-gray-300" />
                <p class="text-xs text-gray-500">${storiesJSON.username}</p>
            </div>
            </header>
    
    `;
    const container = document.querySelector("main");
    container.insertAdjacentHTML("beforeend", template);
}

async function getSuggestions(){  
const response = await fetch("https://photo-app-secured.herokuapp.com/api/suggestions/", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }
});
const data = await response.json();
console.log(data);
renderSuggestions(data);
}

function renderSuggestions(suggestionsListJSON){
    suggestionsListJSON.forEach(renderSuggestion);
}   



function renderSuggestion(suggestionsJSON){
    const template = ` 

    <p class="text-base text-gray-400 font-bold mb-4">Suggestions for you</p>

            <section class="flex justify-between items-center mb-4 gap-2">
                <img src="${suggestionsJSON.image_url}" class="rounded-full" />
                <div class="w-[180px]">
                    <p class="font-bold text-sm">${suggestionsJSON.username}</p>
                    <p class="text-gray-500 text-xs">suggested for you</p>
                </div>
                <button class="text-blue-500 text-sm py-2">follow</button>
            </section>
            `;
    const container = document.querySelector("aside");
    container.insertAdjacentHTML("beforeend", template);

}

function renderPost(postJSON) {
    const template = `

    <!-- POSTS -->
        <section class="bg-white border mb-10">
            <div class="p-4 flex justify-between">
                <h3 class="text-lg font-Comfortaa font-bold">${postJSON.user.username}</h3>
                <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
            </div>
            <img src="${postJSON.image_url}" alt="${postJSON.alt_text}" width="300" height="300"
                class="w-full bg-cover">
            <div class="p-4">
                <div class="flex justify-between text-2xl mb-3">
                    <div>
                        ${getLikeButton(postJSON)}
                        <button><i class="far fa-comment"></i></button>
                        <button><i class="far fa-paper-plane"></i></button>
                    </div>
                    <div>
                        ${renderBookmarkButton(postJSON)}
                    </div>
                </div>
                <p class="font-bold mb-3">${postJSON.likes.length} likes</p>
                <div class="text-sm mb-3">
                    <p>
                        <strong>${postJSON.user.username}</strong>
                        ${postJSON.caption} <button class="button">more</button>
                    </p>
                </div>
                ${showComments(postJSON.comments)}
                <p class="uppercase text-gray-500 text-xs">${postJSON.display_time}</p>
            </div>
            <div class="flex justify-between items-center p-3">
                <div class="flex items-center gap-3 min-w-[80%]">
                    <i class="far fa-smile text-lg"></i>
                    <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button class="text-blue-500 py-2">Post</button>
            </div>
        </section>
    <!-- POSTS -->

    `;
    const container = document.querySelector("main");
    container.insertAdjacentHTML("beforeend", template);
}

function renderPosts(postListJSON) {
    // option 1:
    postListJSON.forEach(renderPost);

    // traditional way:
    // for (const postJSON of postListJSON) {
    //     renderPost(postJSON);
    // }
}
//input: comments
//output: html string representing commennts
function showComments(comments){
    if(comments.length > 1){
        const lastComment = comments[comments.length-1];
        return `
            <button class="text-sm mb-3">
            view all ${comments.length} comments
            </button>
            <p class="text-sm mb-3"><strong>${lastComment.user.username}</strong> ${lastComment.text}</p>
        `;
    }
    if(comments.length === 1){
        return `
        <p class="text-sm mb-3"><strong>${comments[0].user.username}</strong ${comments[0].text}</p>
        `;
    }
    return ``;
}

// -------- likes ---------
function getLikeButton(postJSON){
    let iconClass = "far"  //a like does not exist and will be empty (not filled in)
    if(postJSON.current_user_like_id){ //a like exists
        iconClass = "fas text-red-700"; //then it is filled in red
            //filled in
    return `<button onclick = "window.deleteLike(${postJSON.current_user_like_id})"><i class="${iconClass} fa-heart"></i></button>`;
} else {
    //hollow
    iconClass = `
    <button onclick = "window.createLike(${postJSON.id})">
        <i class="far fa-heart"></i>
        </button> `;
    }
    return iconClass;
}

window.createLike = async function (postId) {
    const postData = {
        post_id: postId,
    };
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/likes/",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
    }
);
const data = await response.json();
console.log(data);
}

window.deleteLike = async function (likeId){
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/likes/${likeId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    console.log(data);
}
// -------- likes ---------


// -------- bookmarks ---------
function renderBookmarkButton(postJSON) {
    let template = "";
    if (postJSON.current_user_bookmark_id) {
        //already bookmarked
        template = `
            <button onclick="window.deleteBookmark(${postJSON.current_user_bookmark_id})">
                <i class="fas fa-bookmark"></i>
            </button>
        `;
    } else {
        //not bookmarked
        template = `
            <button onclick="window.createBookmark(${postJSON.id})">
                <i class="far fa-bookmark"></i>
            </button>
        `;
    }
    return template;
}
window.createBookmark = async function (postId) {
    const postData = {
        post_id: postId,
    };
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/bookmarks/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
    }
);
    const data = await response.json();
    console.log(data);
}

window.deleteBookmark = async function (bookmarkId){
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/bookmarks/${bookmarkId}`, {
        method: "DELETE",
       headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    console.log(data);
}
// -------- bookmarks ---------


// after all of the functions are defined, invoke initialize at the bottom:
initializeScreen();