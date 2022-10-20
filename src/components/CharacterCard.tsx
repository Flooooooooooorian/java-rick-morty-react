import './CharacterCard.css';
import {Character} from "../model/Character";

type CharacterCardProps = {
    character : Character
}

export default function CharacterCard( props : CharacterCardProps ){

    return <div className="character-card">
        <h3 className="character-card__name">{props.character.name}</h3>
        <img className="character-card__image" src={props.character.image} alt={props.character.name}/>
        <div className="character-card__origin">{props.character.origin.name}</div>
    </div>
}
