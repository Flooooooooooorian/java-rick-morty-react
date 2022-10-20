import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import Header from "./components/Header";
import {ChangeEvent, useEffect, useState} from "react";
import ActionBar from "./components/ActionBar";
import {Character} from "./model/Character";
import {getCharacters} from "./services/RickAndMortyApiService";

export default function App() {

  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    getCharactersFromApi()
  }, [])

  const getCharactersFromApi = () => {
    getCharacters("https://rickandmortyapi.com/api/character")
        .then(data => {
          setCharacters(data.results)
        })
        .catch(error => console.log(error))
  }

  return (
    <div className="App">

      <Header />

      <CharacterGallery characters={characters} />

    </div>
  );
}

