//This page currently serves as a placeholder as the user profile feature is still being worked on.
import { Link } from "react-router-dom"

export default function UserProfile({userLoggedIn, user}){
    //For this page, if a user logged in a simple user profile for the logged in user is dispalyed. If a user is not logged in,
    // then this page displays two links to the login or sign up pages. 
    if(userLoggedIn){
        return(
            <div>
                <h2>{user.username}</h2>
                <p>{user.bio}</p>
                <h3>Interests:</h3>
                <p>{user.interests}</p>
            </div>
        )
    }
    else{
        return(
            <div>
                <Link to={'/login'}>Log In</Link>
                <p>or</p>
                <Link to={'/signup'}>Sign up</Link>
            </div>
        )
    }
}