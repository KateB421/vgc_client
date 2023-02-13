import './Home.css'

export default function Home({userLoggedIn, user}){
    let welcomeContent="to VideoGame Clubs";
    if(userLoggedIn){
        welcomeContent=user.username;
    }
    return(
        <div className='home'>
            <h1>Welcome {welcomeContent}!</h1>
            <p>Do Things!</p>
            <p>Have Fun!</p>
        </div>
    )
}