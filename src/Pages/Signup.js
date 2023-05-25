//This is the area for creating an account
import { Link } from "react-router-dom";
import { useReducer } from "react";
import './Signup.css';

const CHANGE_USERNAME="Changing_Username";
const CHANGE_PASSWORD='Changing_Password';
const CHANGE_EMAIL='Changing_Email';
const CHANGE_BIO="Changing_Bio";
const CHANGE_INTERESTS="Changing_Interests";
const RESET_STATE="Resetting_State"
const initState={
    username:"",
    password:"",
    email:"",
    bio:"",
    interests:""
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
                password: action.payload
            }
        case CHANGE_EMAIL:
            return{
                ...state,
                email:action.payload
            }
        case CHANGE_BIO:
            return{
                ...state,
                bio:action.payload
            }
        case CHANGE_INTERESTS:
            return{
                ...state,
                interests:action.payload
            }
        case RESET_STATE:
            return initState
        default:
            throw new Error(`That was weird. How did you ${action.type}?`)
    }
}

export default function SignUp(){
    const [state, dispatch]=useReducer(reducer,initState);
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
    function onEmailChange(event){
        dispatch({
            type:CHANGE_EMAIL,
            payload: event.target.value
        })
    }
    function onBioChange(event){
        dispatch({
            type:CHANGE_BIO,
            payload: event.target.value
        })
    }
    function onInterestsChange(event){
        dispatch({
            type:CHANGE_INTERESTS,
            payload: event.target.value
        })
    }
    function onClearClick(event){
        event.preventDefault();
        dispatch({
            type:RESET_STATE
        })
    }
    async function onSignup(item){
        //Need to add input validatation
        let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/users/add`,{
            method:'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item)
        });
        res=await res.json();
    }
    function onFormSubmit(event){
        event.preventDefault();
        onSignup(state);
        dispatch({
            type:RESET_STATE
        })
    }
    return(
        <div className="signUp">
            <form autoComplete="off" onSubmit={onFormSubmit}>
                <label htmlFor='newUsername'>Username*</label>
                <input value={state.username} id="newUsername" type={'text'} onChange={onUsernameChange}/>
                {/* Need to check for password requirements */}
                <label htmlFor='createPassword'>Password*</label>
                <input value={state.password} onChange={onPasswordChange} id="createPassword" type={'password'}/>
                {/* Need to check for email requirements */}
                <label htmlFor='signUpEmail'>Email*</label>
                <input value={state.email} onChange={onEmailChange} id="signUpEmail" type={'email'}/>
                <label htmlFor='signUpBio'>Bio</label>
                <input value={state.bio} onChange={onBioChange} id="signUpBio" type={'text'}/>
                <label htmlFor='signUpInterests'>Video Game Interests</label>
                <input value={state.interests} onChange={onInterestsChange} id="signUpInterests" type={'text'}/>
                <button>Sign Up</button>
                <button onClick={onClearClick}>Clear</button>
            </form>
            <p>*Required</p>
            <Link to={'/login'}>Already have an account? Log in here.</Link>
        </div>
    )
}