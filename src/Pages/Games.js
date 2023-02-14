import { useEffect, useState } from "react"
import Addgamearea from "../Components/Addgamearea";
import Gamecard from "../Components/Gamecard";
import './Games.css';

export default function GamesArea({userLoggedIn}){
    const [gameList, setGameList]=useState([]);
    const [addAreaOpen, setAddAreaOpen]=useState(false);

    async function getAllGames(){
        let res=await fetch(`${process.env.REACT_APP_SERVER_URL}/api/games`);
        res=await res.json();
        setGameList(res.results)
    }
    function onAddClick(){
        setAddAreaOpen(!addAreaOpen);
    }
    async function addThisItem(item){
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/games/add`,{
            method:'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item)
        });
        res=await res.json();
        getAllGames();
        onAddClick();
    }
    useEffect(function(){
        getAllGames();
    },[])
    let addArea;
    if(userLoggedIn&&addAreaOpen){
        addArea=<div>
            <Addgamearea addThisItem={addThisItem}/>
            <button onClick={onAddClick}>Cancel</button>
        </div>
    }
    else if(userLoggedIn){
        addArea=<button onClick={onAddClick}>Add Game</button>
    }
    let gameCards;
    if(gameList.length>0){
        gameCards=gameList.map(function(item){
            return(
                <Gamecard key={item.id} item={item}/>
            )
        })
    }
    return(
        <div className="gamesArea">
            <h1>Games</h1>
            {addArea}
            {gameCards}
        </div>
    )
}