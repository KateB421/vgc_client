# VideoGame Clubs
## Create Groups to Play and Discuss Video Games Together
Throughout history, new forms of media consistantly go through a cycle of disapproval and criticism before being taken seriously as an art form. Theater, the novel, radio, and film have all gone through this cycle. As video games and the analysis of them become more popular, I felt something was missing. I thought of book clubs and the concept of having a structured setting for people to come together and consume and discuss media. My website, VideoGame Clubs offers a space to create and find this kind of setting.
## Features
- User Log In, Sign Up, and Log Out
- User Profiles with Bio and Intrests
- Browse and Add Video Games
- Browse and Make Posts for Specific Games or General topics.
- Custom Styled Components
- Bcrypt Encoding
## Live Site
Check Out VideoGame Clubs [here!](https://videogameclub.onrender.com/)
## Technical Framework Usage: PERN Stack
- PostgreSQL
- Express
- React
- Node.js
## Goals
- Browse, Create, and Join Public and Private Groups
- Comment on and React to Posts
- Support for Uploading Images (profile picture, game cover, post images).
- Add More to Home Page and Update Styling
## Challenges
- Completing Project from Conception to Deployment by Myself in One Week.
- Prioritizing Features Based on Short Time Frame.
- Coordinating Multiple Calls to Database on One Page.
## Triumphs
- Creating thorough API for Database
- Applied Knowledge and Skills From DigitalCrafts Web Development Course.
- Researched React Techniques Not Covered in Class.
## Project Credit Goes To:
- [Kate Burton](https://github.com/KateB421)
## Code Examples
### Sign Up Component:
    async function onSignup(item){
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
                <label htmlFor='createPassword'>Password*</label>
                <input value={state.password} onChange={onPasswordChange} id="createPassword" type={'password'}/>
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
### Style CSS Sign Up Component:
    .signUp{
        background-color: #995fa3;
        color: white;
        padding: 4% 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10% 40%;
        border-radius: 12px;
        
    }

    .signUp a{
        color: white;
        text-decoration: none;
    }

    .signUp a:visited{
        color: white;
        text-decoration: none;
    }

    .signUp a:hover{
        text-decoration: underline;
    }

    .signUp label{
        margin: 2px;
        font-size:x-large;
    }

    .signUp input{
        margin-bottom: 8px;
    }
    .signUp form{
        margin-top: 12px;
        margin-bottom: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .signUp button{
        margin-top: 4px;
        margin-bottom: 4px;
        width: fit-content;
        font-size: large;
    }

# The End.