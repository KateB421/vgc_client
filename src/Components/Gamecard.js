//Component for creating card for each game.
import { Link } from "react-router-dom";
import './Gamecard.css'

export default function Gamecard({item}){
    return(
        <div className="gameCard">
            <Link to={`/forum/${item.id}`}><h2>{item.title}</h2></Link>
            <p>{item.description}</p>
        </div>
    )
}