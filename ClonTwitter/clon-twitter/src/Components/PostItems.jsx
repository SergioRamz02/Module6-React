import React from "react";
import "../assets/styles/PostItems.css"

export default function PostItems({username, postText, isLiked, index, posts, setPosts}){

    const handleLike = (index) =>{
        const postClick = posts[index];
        const updatedPost ={
            username: postClick.username,
            postText: postClick.postText,
            isLiked: !postClick.isLiked,
            idPost: postClick.idPost,
        }

        const newPosts = [];

        for (let i = 0; i < posts.length; i++) {
            if(posts[i].idPost != postClick.idPost){
                newPosts.push(posts[i]);
            }else {
                newPosts.push(updatedPost);
            }
            
        }
        setPosts(newPosts);
        console.log(postClick);
    }
    return(
        <div className="post-item">
            <h1>{username}</h1>
            <p>{postText}</p>
            <img onClick={()=> handleLike(index)} src={isLiked ? "": ""} alt="like" />

        </div>
    )
}