import React from "react";
import {postDataToServer, deleteDataFromServer} from "../server-requests"

/*
 * Job: 
    1. Render the bookmark (reflect whether user has bookmarked/or not)
    2. Create / Delete bookmarks
 */

    async function createBookmark(){
        console.log("creating bookmark.");
        //send an http post request to create bookmark

    }

    async function deleteBookmark(){
        console.log("deleting bookmark.");
        
    }


export default function Bookmark({bookmarkId, postId}){
    console.log(bookmarkId);

if(bookmarkId){
    return (
        <button onClick={deleteBookmark}> 
            {/* filled in */}
            <button aria-label="bookmark"><i className="fas fa-bookmark"></i></button>
        </button>
    );
} else { 
    return (
        <button onClick={createBookmark}>
            {/* not filled in */}
            <button aria-label="bookmark"><i className="far fa-bookmark"></i></button>
        </button>
    );
}
}
