//This is the page for all the public posts related to a specific game.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreatePost from "../Components/Createpost";
import Postcard from "../Components/Postcard";
import './Singlegamearea.css'

export default function Game({userLoggedIn, user}){
    const [areaGame, setAreaGame]=useState({});
    const [areaPosts, setAreaPosts]=useState([]);
    let {id}=useParams();
    async function getGame(){
        let res=await fetch(`${process.env.REACT_APP_SERVER_URL}/api/games/${id}`);
        res=await res.json();
        setAreaGame(res.results);
    }
    async function getGamePosts(){
        let res=await fetch(`${process.env.REACT_APP_SERVER_URL}/api/posts/game/${id}`);
        res=await res.json();
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
        let res=await fetch(`${process.env.REACT_APP_SERVER_URL}/api/posts/add`,{
            method:'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item)
        });
        res=res.json();
        getGamePosts();
    }
    useEffect(function(){
        getGame();
    },[])
    useEffect(function(){
        getGamePosts();
    },[])
    //If there is a user logged in, then they are able to see the area to make a post. Otherwise, it's not visable.
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
        <div className="singleGame">
            <h1>{areaGame.title}</h1>
            <p>{areaGame.description}</p>
            <p>{areaGame.release}</p>
            <p>{areaGame.genre}</p>
            {/* <p>{areaGame.developer}</p> */}
            {/* <p>{areaGame.publisher}</p> */}
            <h2>Posts</h2>
            {createPostArea}
            <div className="gamePostCards">
                {postCards}
            </div>
        </div>
    )
}