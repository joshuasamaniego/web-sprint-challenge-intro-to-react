// Write your Character component here
//import axios from 'axios';
import React from 'react';

export default function Characters(props) {

    const { characters } = props;

    console.log(characters);

    return (
       <div>
            { characters && characters.map((character, index) => (
               <img src={character.image} alt="" key={index}></img>
            ))}
            { characters && characters.map((character, index) => (
                <li key={index}>
                {character.name}
                </li>
            ))}
       </div>
    );
}