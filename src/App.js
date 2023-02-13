import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {BrowserRouter as Router} from 'react-router-dom';
import RouterRegion from "./Components/Routerregion";
import { useState } from "react";
import './App.css';

export default function App(){
    const [userLoggedIn, setUserLoggedIn]=useState(false);
    const [user, setUser]=useState('');
    async function onLogin(info){
        let res = await fetch('http://localhost:3005/api/verification',{
            method:'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(info)
        });
        res=await res.json();
        console.log(res);
        setUser(res.theUserInformation);
        setUserLoggedIn(true);

    }
    function LogOut(){
        setUser('');
        setUserLoggedIn(false);
    }
    return(
        <div>
            <Router>
                <Header user={user} userLoggedIn={userLoggedIn} LogOut={LogOut}/>
                <RouterRegion onLogin={onLogin} userLoggedIn={userLoggedIn} user={user}/>
                <Footer/>
            </Router>
        </div>
    )
}