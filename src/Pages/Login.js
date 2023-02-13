import { Link } from "react-router-dom";
import { useReducer } from "react";
import { Navigate } from "react-router-dom";
import './Login.css'

const CHANGE_USERNAME="Changing_Username";
const CHANGE_PASSWORD="Changing_Password";
const RESET_STATE="Resetting_State";
const initState={
    username:"",
    password:""
}

function reducer(state, action){
    switch(action.type){
        case CHANGE_USERNAME:
            return{
                ...state,
                username:action.payload
            };
        case CHANGE_PASSWORD:
            return{
                ...state,
                password:action.payload
            }
        case RESET_STATE:
            return initState
        default:
            throw new Error(`That was weird. How did you ${action.type}?`)
    }
}

export default function Login({userLoggedIn, onLogin}){
    const [state, dispatch]=useReducer(reducer,initState);
    if(userLoggedIn){
        return(
            <Navigate to={'/'}/>
        )
    }
    function onUsernameChange(event){
        dispatch({
            type:CHANGE_USERNAME,
            payload: event.target.value
        })
    }
    function onPasswordChange(event){
        dispatch({
            type:CHANGE_PASSWORD,
            payload: event.target.value
        })
    }
    function onFormSubmit(event){
        event.preventDefault();
        onLogin(state)
        dispatch({
            type:RESET_STATE
        })
    }
    return(
        <div className="login">
            <form autoComplete="off" onSubmit={onFormSubmit}>
                <label htmlFor="username">Username</label>
                <input onChange={onUsernameChange} value={state.username} id="username" type={"text"}/>
                <label htmlFor="password">Password</label>
                <input onChange={onPasswordChange} value={state.password} id="password" type={'password'}/>
                <button>Log In</button>
            </form>
            <Link to={'/signup'}>Don't have an account? Sign up here.</Link>
        </div>
    )
}