import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {BrowserRouter as Router} from 'react-router-dom';
import RouterRegion from "./Components/Routerregion";
import { useState } from "react";
import './App.css';

export default function App(){
    //Here I am setting up tracking if a user is logged in. I created two states, one for if a user is logged in, one for the user data.
    //I also created a function to handle login. Once the user is verifyed, the user data is set as the userState and the userLoggedIn state is set to true.
    //There is also a function to handle logout which resets both states.
    const [userLoggedIn, setUserLoggedIn]=useState(false);
    const [user, setUser]=useState('');
    async function onLogin(info){
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/verification`,{
            method:'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(info)
        });
        res=await res.json();
        // console.log(res);
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