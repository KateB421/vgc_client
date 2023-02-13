import { useEffect, useState } from "react";
import CreatePost from "../Components/Createpost";
import Postcard from "../Components/Postcard";
import './General.css'

export default function General({user, userLoggedIn}){
    const [areaGame, setAreaGame]=useState({});
    const [areaPosts, setAreaPosts]=useState([]);
    async function getGeneral(){
        let res=await fetch('http://localhost:3005/api/games/1');
        res=await res.json();
        // console.log(res);
        setAreaGame(res.results);
        // console.log(areaGame);
    }
    async function getGeneralPosts(){
        let res=await fetch('http://localhost:3005/api/posts/game/1');
        res=await res.json();
        console.log(res)
        setAreaPosts(res.results);
    }
    async function onNewPost(text){
        let item={
            content:text,
            creator:user.id,
            reference:0,
            honors:0,
            gameIn:areaGame.id,
            private:1
        }
        let res=await fetch('http://localhost:3005/api/posts/add',{
            method:'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item)
        });
        res=res.json();
        getGeneralPosts();
    }
    useEffect(function(){
        getGeneral();
    },[])
    useEffect(function(){
        getGeneralPosts();
    },[])
    let createPostArea;
    if(userLoggedIn){
        createPostArea=<CreatePost user={user} areaGame={areaGame} onNewPost={onNewPost}/>
    }
    let postCards;
    if(areaPosts.length>0){
        postCards=areaPosts.map(function(post){
            return(
                <Postcard key={post.id} post={post}/>
            )
        })
    }
    return(
        <div className="general">
            <h1>{areaGame.title}</h1>
            <p>{areaGame.description}</p>
            <h2>Posts</h2>
            {createPostArea}
            <div className="postCardArea">
                {postCards}
            </div>
        </div>
    )
}