//Component for the header.
import { Link } from "react-router-dom";
import './Header.css'

export default function Header({user, userLoggedIn, LogOut}){
    let userContent=<Link to={'/login'}>Log In</Link>
    function onLogoutClick(){
        LogOut()
    }
    //If there is a user logged in, they have a link to their profile and a log out button.
    //If there is no user logged in, there is a link to the login page. 
    if(userLoggedIn){
        userContent=<div>
            <Link to={`/user/${user.id}`}>Profile</Link>
            <Link onClick={onLogoutClick} to={'/'}>Log Out</Link>
        </div>
    }
    return(
        <div>
            <header>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/browse/games'}>Games</Link>
                    {/* <Link to={'/browse/groups'}>Groups</Link> */}
                    <Link to={'/forum/1'}>General</Link>
                </nav>
                <div>
                    {userContent}
                </div>
            </header>
        </div>
    )
}