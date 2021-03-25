import React from 'react';
import { Character } from '../Page';
import {
  CardsWrapper,
  CardItem,
  CardContainer,
  CardContent,
  CardImage,
  CardTitle,
  CardText,
  ListDiv
} from '../styles/cardStyles';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Card = ({ characters }: { characters: Character[] }) => {
  const location = useLocation();
  return (
    <>
      {characters && location.pathname === '/' && characters.map((character,index) =>
        <ListDiv key={character.id}>
          <CardsWrapper>
            <CardItem>
              <CardContainer>
                <CardImage>
                  <img src={String(character.image)}></img>
                </CardImage>
                <CardContent>
                  <CardTitle>{character.name}</CardTitle>
                  <CardText>
                    <p>{character.status}</p>
                    <Link to={`/CardDetails/${index}`}>more...</Link>
                  </CardText>
                </CardContent>
              </CardContainer>
            </CardItem>
          </CardsWrapper>
        </ListDiv>)}
    </>
  )
}

export default Card;
