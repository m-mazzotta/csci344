import React , {useState} from "react";
import {postDataToServer, deleteDataFromServer} from "../server-requests"



   /*
 * Job: 
    1. Render the bookmark (reflect whether user has bookmarked/or not)
    2. Create / Delete bookmarks
 */
export default function Bookmark({bookmarkId, postId, token}){
    const [stateBoomarkId, setStateBookmarkId] = useState(bookmarkId);

    console.log(bookmarkId);

    async function createBookmark(){
        const sendData = {
            post_id: postId,
        };
        console.log("creating bookmark.");
        //send an http post request to create bookmark
        const responseData = await postDataToServer(token, "/api/bookmarks/", sendData);
        console.log(responseData);

        setStateBookmarkId(responseData.id); //created

    }

    async function deleteBookmark(){
        const url = '/api/bookmarks/' + stateBoomarkId;
        console.log("deleting bookmark.");

        const responseData = await deleteDataFromServer(token, url);
        console.log(responseData);

        setStateBookmarkId(null); //deleted

        
    }

if(stateBoomarkId){
    return (
        <button aria-label="create" aria-checked="false" aria-role="toggle" onClick={deleteBookmark}> 
            {/* filled in */}
            <i className="fas fa-bookmark"></i>
        </button>
    );
} else { 
    return (
        <button aria-label="delete" aria-checked="true" aria-role="toggle" onClick={createBookmark}>
            {/* not filled in */}
            <i className="far fa-bookmark"></i>
        </button>
    );
}
}
