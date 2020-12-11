// Write your Character component here
import React from 'react';
import styled, { keyframes } from "styled-components";

export default function Characters({ characters }) { // props is a parameter and a name of an object.
    // const { characters } = props;
    return (
        <StyledContainer>
        { characters.map((character, id) => (
            <StyledCharactersDiv key={id}>
                <h2>{character.name}</h2>
                <img src={character.image} alt=""></img>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
                <p>Status: {character.status}</p>
            </StyledCharactersDiv>
        )) }
   </StyledContainer>
    );
}

const kf = keyframes`
  100% {
    opacity: 1;
  }
`
const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const StyledCharactersDiv = styled.div`
    width: 20rem;
    height: 35rem;
    padding: 0% 2%;
    margin: 3%;
    align-items: left;
    font-weight: bold;
    background-color: #333;
    color: white;
    border: 2px solid #26F0F1;
    box-shadow: 0px 1px 6px 2px #26F0F1;

    img {
        opacity: 0;
        animation: ${kf} 0.5s ease-in-out forwards;
        border: 2px solid #fff;
    }

    h2 {
        font-weight: bold;
    }
    &:hover {                    
        background-color: #26F0F1;
        color: #333;
        transition: all 0.4s ease-in-out;
        transform: scale(1.04);
      }
      transition: all 0.4s ease-in-out;

    &:hover img{                    
        border: 2px solid #333;
        transition: all 0.4s ease-in-out;
        }
        transition: all 0.4s ease-in-out;
    
`