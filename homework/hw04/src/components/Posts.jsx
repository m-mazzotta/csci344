import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Post from "./Post.jsx"


// job:
// 1. fetches post data from server
// 2. iterates through each element and draws post component

export default function Posts({ token }) {
    const [posts, setPosts] = useState([]);
    //everytime state variable gets set, screen redraws
    // const [posts, setPosts]: 
    // ([]): default variable
    //when useState is invoked, returns an array with two values: 
    // 1. state variable (posts)
    // 2. function whose job is to set state variable (setPosts)
    //redraw screen after variable is set.

    const [counter, setCounter] = useState(0);

    async function getPosts() {
        //fetches data
        const data = await getDataFromServer(token, "/api/posts");
        //print to screen
        console.log(data);
        //set state variable
        setPosts(data);
    }

    //only want to run a function once
    useEffect(() => {
        getPosts();
    }, []);

function addOneToCounter(){
    setCounter (counter + 1);
}

    console.log("redraw screen with ", counter);
    return (
        <div>
            TODO: output all of the posts: {posts.length}
            {posts.map((post) => (
            <Post key={post.id} token={token} post={post}/>
            ))
        }
        <br />
        <button onClick={addOneToCounter} >
            {counter}
        </button>
        
        </div>);

}
