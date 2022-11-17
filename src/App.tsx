
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import Header from "./components/Header";
import {ChangeEvent, useEffect, useState} from "react";
import ActionBar from "./components/ActionBar";
import {Character} from "./model/Character";
import axios from "axios";


export default function App() {

  const [searchText, setSearchText] = useState<string>("")
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    getCharacters()
  }, [])

  function getCharacters() {
    console.log("Start")
    axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => {
          console.log("Request fertig")
            console.log(response.data.results)
            setCharacters(response.data.results)
        })
    console.log("ende")
  }

  const filteredCharacters = characters.filter((character) => {
    if (character.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true
    }
    return false
  })

  function myFunction(searchText: string) {
    console.log("App")
    console.log(searchText)
    setSearchText(searchText)
  }

  return (
    <div className="App">
      <Header />
      <ActionBar myCallBackFunction={myFunction} />
      <CharacterGallery characters={filteredCharacters} />
    </div>
  );
}

