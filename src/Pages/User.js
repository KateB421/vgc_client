import { Link } from "react-router-dom"

export default function UserProfile({userLoggedIn, user}){
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