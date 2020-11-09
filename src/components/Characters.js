// Write your Character component here
import React from 'react';
import styled from "styled-components";

export default function Characters(props) {
    const { characters } = props;
    return (
       <StyledContainer>
            { characters.map((character, id) => (
                <StyledCharactersDiv key={id}>
                    <img src={character.image} alt=""></img>
                    <li>{character.name}</li>
                    <li>{character.species}</li>
                    <li>{character.gender}</li>
                </StyledCharactersDiv>
            )) }
       </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledCharactersDiv = styled.div`
    width: 20%;
    height: 50vh;
    padding: 2%;
    margin: 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background-color: #333;
    color: white;
`