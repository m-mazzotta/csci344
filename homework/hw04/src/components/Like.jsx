import React from "react";


export default function Like({likeId}){
    console.log(likeId);

if(likeId){
    return (
        <button> 
            {/* filled in */}
        <button aria-label="like"><i className="fas text-red-700 fa-heart"></i></button>
    </button>
    );
} else { 
    return (
        <button>
            {/* not filled in */}
        <button aria-label="like"><i className="far fa-heart"></i></button>
    </button>
    );
    }
}