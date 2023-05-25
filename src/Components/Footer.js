//Component for the footer
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer(){
    return(
        <div className='theFoot'>
            <footer>
                <p>Created by Kate Burton</p>
                {/* Hey look! That's me! */}
                <Link to={'https://kateburton.netlify.app/'}>Website</Link>
                <Link to={'https://github.com/KateB421/vgc_client'}>GitHub</Link>
            </footer>
        </div>
    )
}