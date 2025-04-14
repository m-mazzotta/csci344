import React, { useState, useEffect } from "react";

import Bookmark from "./Bookmark";
import Like from "./Like";

export default function Post({ token, post }) {

    function outputComment(){
        //return post.comments.length;
        if(post.comments.length === 0){
            return "";
        } 
        if(post.comments.length === 1){
            const comment = post.comments[0];
            return (
            <div>
                <button aria-label="more" className="text-sm mb-3">
                View all {post.comments.length} comments
                </button>
                <p className="text-sm mb-3"><strong>{comment.user.username}</strong> {comment.text}</p>
            </div>
            );

        }
        if(post.comments.length > 1){
            const lastComment = post.comments[post.comments.length-1];
            return (
            <div>
                <button aria-label="more" className="text-sm mb-3">
                view all {post.comments.length} comments
                </button>
                <p className="text-sm mb-3"><strong>{lastComment.user.username}</strong> {lastComment.text}</p>
            </div>
            );

        }
    }

    return (

        <section className="bg-white border mb-10">

            {/* user header */}
                <div className="p-4 flex justify-between">
                    <h3 className="text-lg font-Comfortaa font-bold">{post.user.username}</h3>
                    <button aria-label="info"className="icon-button"><i className="fas fa-ellipsis-h"></i></button>
                </div>

                {/* image */}
                <img src={post.image_url} alt={post.alt_text || "Post Photo"} width="300" height="300"
                    className="w-full bg-cover"/>

                {/* buttons */}
                <div className="p-4">
                    <div className="flex justify-between text-2xl mb-3">
                        <div className="flex gap-2">

                            {/* like */}
                            <Like likeId={post.current_user_like_id} postId={post.id} token={token}/>

                            <button aria-label="comment"><i className="far fa-comment"></i></button>
                            <button aria-label="share"><i className="far fa-paper-plane"></i></button>
                        </div>
                        <div>

                            {/* bookmark */}
                            <Bookmark bookmarkId={post.current_user_bookmark_id} postId={post.id} token={token} />
                        </div>
                    </div>

                    {/* likes number */}
                    <p className="font-bold mb-3">{post.likes.length} likes</p>

                    {/* caption by author */}
                    <div className="text-sm mb-3 flex gap-2">
                        <p>
                            <strong>{post.user.username} </strong>
                            {post.caption}<button className="button">more</button>
                        </p>
                    </div>

                    {/* comments */}
                    {outputComment()}

                    {/* last uploaded */}
                    <p className="uppercase text-gray-500 text-xs">{post.display_time}</p>
                </div>

                {/* adding comments */}
                <div className="flex justify-between items-center p-3">
                    <div className="flex items-center gap-3 min-w-[80%]">
                        <i className="far fa-smile text-lg"></i>
                        <input aria-label="comment" type="text" className="min-w-[80%] focus:outline-none" placeholder="Add a comment..." />
                    </div>
                    <button className="text-blue-700 ml-3">Post</button>
                </div>

            </section>
    )
}