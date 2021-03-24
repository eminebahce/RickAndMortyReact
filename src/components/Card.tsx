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

const Card = ({ characters }: { characters: Character[] }) => {
  return (
    <>
      {characters && characters.map(character =>
        <ListDiv>
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
