import React , {useState} from "react";
import {postDataToServer, deleteDataFromServer} from "../server-requests"


export default function Like({likeId, postId, token}){
const [stateLikeId, setStateLikeId] = useState(likeId);
    console.log(likeId);

    async function createLike(){
        const sendData = {
                    post_id: postId,
                };
                console.log("creating like.");
                //send an http post request to create like
                const responseData = await postDataToServer(token, "/api/likes/", sendData);
                console.log(responseData);
        
                setStateLikeId(responseData.id); //created
        
            }
    
    async function deleteLike(){
        const url = '/api/likes/' + stateLikeId;
                console.log("deleting like.");
        
                const responseData = await deleteDataFromServer(token, url);
                console.log(responseData);
        
                setStateLikeId(null); //deleted
        
                
            }
        

if(stateLikeId){
    return (
        <button aria-label="create" aria-checked="false" aria-role="toggle" onClick={deleteLike}> 
            {/* filled in */}
        <i className="fas text-red-700 fa-heart"></i>
    </button>
    );
} else { 
    return (
        <button aria-label="delete" aria-checked="true" aria-role="toggle" onClick={createLike}>
            {/* not filled in */}
        <i className="far fa-heart"></i>
    </button>
    );
    }
}
