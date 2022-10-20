import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import Header from "./components/Header";
import {ChangeEvent, useEffect, useState} from "react";
import ActionBar from "./components/ActionBar";
import {Character} from "./model/Character";
import {getCharacters} from "./services/RickAndMortyApiService";

export default function App() {

    const [characters, setCharacters] = useState<Character[]>([])
    const [searchText, setSearchText] = useState<string>("")
    const [nextUrl, setNextUrl] = useState<string | undefined>()
    const [prevUrl, setPrevUrl] = useState<string | undefined>()

    useEffect(() => {
        getCharactersFromApi("https://rickandmortyapi.com/api/character")
    }, [])

    const getCharactersFromApi = (url?: string) => {
        if (url) {
            getCharacters(url)
                .then(data => {
                    setCharacters(data.results)
                    setNextUrl(data.info.next)
                    setPrevUrl(data.info.prev)
                })
                .catch(error => console.log(error))
        }
    }

    const filteredCharacters = characters.filter(character => character.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

    const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    return (
        <div className="App">

            <Header/>

            <ActionBar searchText={searchText} onSearchInputChange={onSearchInputChange} hasNext={!!nextUrl} hasPrev={!!prevUrl} loadNext={() => getCharactersFromApi(nextUrl)} loadPrev={() => getCharactersFromApi(prevUrl)}/>

            <CharacterGallery characters={filteredCharacters}/>

        </div>
    );
}

