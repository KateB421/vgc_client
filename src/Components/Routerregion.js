//Handling the routes. 
import {Routes, Route} from 'react-router-dom';
import GamesArea from '../Pages/Games';
import General from '../Pages/General';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/Signup';
import Game from '../Pages/Singlegamearea';
import UserProfile from '../Pages/User';

export default function RouterRegion({onLogin, userLoggedIn, user}){
    return(
        <Routes>
            <Route path='/' element={<Home userLoggedIn={userLoggedIn} user={user}/>}/>
            <Route path='/login' element={<Login userLoggedIn={userLoggedIn} onLogin={onLogin}/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/user/:id' element={<UserProfile userLoggedIn={userLoggedIn} user={user}/>}/>
            <Route path='/forum/1' element={<General userLoggedIn={userLoggedIn} user={user}/>}/>
            <Route path='/browse/games' element={<GamesArea userLoggedIn={userLoggedIn}/>}/>
            <Route path='/forum/:id' element={<Game userLoggedIn={userLoggedIn} user={user}/>}/>
        </Routes>
    )
}