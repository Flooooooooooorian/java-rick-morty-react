import './CharacterGallery.css';
import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";


type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div className="character-gallery">
            {props.characters.map((char) => <CharacterCard key={char.id} character={char}/>)}
        </div>
    )

}
