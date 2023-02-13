import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer(){
    return(
        <div className='theFoot'>
            <footer>
                <p>Created by Kate Burton</p>
                <Link to={'https://kateburton.netlify.app/'}>Website</Link>
                <Link to={'https://github.com/KateB421/video-game-club'}>GitHub</Link>
            </footer>
        </div>
    )
}