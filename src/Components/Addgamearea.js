import { useReducer } from "react"

const CHANGE_TITLE='Changing_Title';
const CHANGE_GENRE='Changing_Genre';
const CHANGE_RELEASE='Changing_Release';
const CHANGE_DEVELOPER='Changing_Developer';
const CHANGE_PUBLISHER='Changing_Publisher';
const CHANGE_DESCRIPTION='Changing_Description';
const RESET_STATE='Resetting_State'
const initState={
    title:"",
    genre:"",
    release:"",
    developer:"",
    publisher:"",
    description:""
}

function  reducer(state, action){
    switch(action.type){
        case CHANGE_TITLE:
            return{
                ...state,
                title:action.payload
            }
        case CHANGE_GENRE:
            return{
                ...state,
                genre:action.payload
            }
        case CHANGE_RELEASE:
            return{
                ...state,
                release:action.payload
            }
        case CHANGE_DEVELOPER:
            return{
                ...state,
                developer:action.payload
            }
        case CHANGE_PUBLISHER:
            return{
                ...state,
                publisher:action.payload
            }
        case CHANGE_DESCRIPTION:
            return{
                ...state,
                description:action.payload
            }
        case RESET_STATE:
            return initState
        default:
            throw new Error(`That was weird. How did you ${action.type}?`)
    }
}

export default function Addgamearea({addThisItem}){
    const [state, dispatch]=useReducer(reducer, initState);

    function onTitleChange(event){
        dispatch({
            type: CHANGE_TITLE,
            payload: event.target.value
        })
    }
    function onDescriptionChange(event){
        dispatch({
            type: CHANGE_DESCRIPTION,
            payload: event.target.value
        })
    }
    function onReleaseChange(event){
        dispatch({
            type: CHANGE_RELEASE,
            payload: event.target.value
        })
    }
    function onGenreChange(event){
        dispatch({
            type: CHANGE_GENRE,
            payload: event.target.value
        })
    }
    function onDeveloperChange(event){
        dispatch({
            type: CHANGE_DEVELOPER,
            payload: event.target.value
        })
    }
    function onPublisherChange(event){
        dispatch({
            type: CHANGE_PUBLISHER,
            payload: event.target.value
        })
    }
    function onClearClick(event){
        event.preventDefault();
        dispatch({
            type:RESET_STATE
        })
    }
    function onFormSubmit(event){
        event.preventDefault();
        addThisItem(state);
    }
    return(
        <div>
            <form autoComplete="off" onSubmit={onFormSubmit}>
                <label htmlFor="newTitle">Title*</label>
                <input type={'text'} value={state.title} onChange={onTitleChange} id="newTitle"/>
                <label htmlFor="newDescription">Description*</label>
                <input type={'text'} value={state.description} onChange={onDescriptionChange} id="newDescription"/>
                <label htmlFor="newRelease">Release Date</label>
                <input type={'text'} value={state.release} onChange={onReleaseChange} id="newRelease"/>
                <label htmlFor="newGenre">Genre</label>
                <input type={'text'} value={state.genre} onChange={onGenreChange} id="newGenre"/>
                <label htmlFor="newDeveloper">Developer</label>
                <input type={'text'} value={state.developer} onChange={onDeveloperChange} id="newDeveloper"/>
                <label htmlFor="newPublisher">Publisher</label>
                <input type={'text'} value={state.publisher} onChange={onPublisherChange} id="newPublisher"/>
                <button type='submit'>Add Game</button>
                <button type='button' onClick={onClearClick}>Clear</button>
            </form>
            <p>*Required</p>
        </div>
    )
}