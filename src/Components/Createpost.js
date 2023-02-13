import { useState } from "react";

export default function CreatePost({onNewPost}){
    const[postContent, setPostContent]=useState("");
    function onContentChange(event){
        setPostContent(event.target.value)
    }
    function onFormSubmit(event){
        event.preventDefault();
        onNewPost(postContent);
        setPostContent('')
    }
    return(
        <form autoComplete="off" onSubmit={onFormSubmit}>
            <input onChange={onContentChange} type={'text'} value={postContent}/>
            <button>Post</button>
        </form>
    )
}