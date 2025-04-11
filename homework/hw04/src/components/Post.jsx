import React, { useState, useEffect } from "react";

import Bookmark from "./Bookmark";
import Like from "./Like";

export default function Post({ token, post }) {

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
                            <Like likeId={post.current_user_like_id} />

                            <button aria-label="comment"><i className="far fa-comment"></i></button>
                            <button aria-label="share"><i className="far fa-paper-plane"></i></button>
                        </div>
                        <div>

                            {/* bookmark */}
                            <Bookmark bookmarkId={post.current_user_bookmark_id} postId={post.id} />
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
                    <p className="text-sm mb-3 flex gap-2">
                        <strong>lizzie</strong>
                        Here is a comment text text text text text text text text.
                    </p>
                    <p className="text-sm mb-3 flex gap-2">
                        <strong>test</strong>
                        Here is another comment text text text.
                    </p>

                    {/* last uploaded */}
                    <p className="uppercase text-gray-500 text-xs">{post.display_time}</p>
                </div>

                {/* adding comments */}
                <div clasName="flex justify-between items-center p-3">
                    <div className="flex items-center gap-3 min-w-[80%]">
                        <i className="far fa-smile text-lg"></i>
                        <input aria-label="comment" type="text" className="min-w-[80%] focus:outline-none" placeholder="Add a comment..." />
                    </div>
                    <button className="text-blue-700 py-2">Post</button>
                </div>

            </section>
    )
}