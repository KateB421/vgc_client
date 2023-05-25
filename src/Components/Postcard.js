//Component for creating the card for each post.
import { useEffect, useState } from "react";
import './Postcard.css'

export default function Postcard({post}){
    const [user, setUser]=useState({});
    async function getPostAuthor(){
        let id=post.creator;
        let res=await fetch(`${process.env.REACT_APP_SERVER_URL}/api/users/${id}`);
        res=await res.json();
        setUser(res.results)
    }
    useEffect(function(){
        getPostAuthor();
    },[])
    return(
        <div className="postCard">
            <p>{post.content}</p>
            {/* <p>Honors: {post.honors}</p> */}
            <p className="postUser">{user.username}</p>
        </div>
    )
}