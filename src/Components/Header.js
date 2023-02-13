import { Link } from "react-router-dom";
import './Header.css'

export default function Header({user, userLoggedIn, LogOut}){
    let userContent=<Link to={'/login'}>Log In</Link>
    function onLogoutClick(){
        LogOut()
    }
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