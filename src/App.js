import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from './components/Characters';
import axios from 'axios';

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,183,124,111,223,175,530,333,444,555')
    .then((res) => {
      setCharacters(res.data);
    })
    .catch((err) => {
      console.log("Something went wrong" + err);
    })
  }, []);
  
  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Character Cards:</h1>
      <Characters characters={characters} />
    </div>
  );
}

export default App;