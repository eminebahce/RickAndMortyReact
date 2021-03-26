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
  ListDiv,
  FontStyle
} from '../styles/cardStyles';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const Card = ({ characters }: { characters: Character[] }) => {
  const location = useLocation();
  return (
    <>
      {characters && location.pathname === '/' && characters.map((character, index) =>
        <ListDiv key={character.id}>
          <CardsWrapper>
            <Link to={`/CardDetails/${index}`}>
              <CardItem>
                <CardContainer>
                  <CardImage>
                    <img src={String(character.image)}></img>
                  </CardImage>
                  <CardContent>
                    <CardTitle>{character.name}</CardTitle>
                    <CardText>
                      {character.status == 'Alive' &&
                        <p style={{ color: "green" }}>
                          <FontStyle>
                            <FontAwesomeIcon icon={faHeartbeat} style={{ color: "green" }} />
                          </FontStyle>
                          {character.status} - {character.species}
                        </p>
                      }
                      {character.status == 'Dead' &&
                        <p style={{ color: "red" }}>
                          <FontStyle>
                            <FontAwesomeIcon icon={faBookDead} style={{ color: "red" }} />
                          </FontStyle>
                          {character.status} - {character.species}
                        </p>
                      }
                      {character.status == 'unknown' &&
                        <p style={{ color: "yellow" }}>
                          <FontStyle>
                            <FontAwesomeIcon icon={faQuestion} style={{ color: "yellow" }} />
                          </FontStyle>
                          {character.status} - {character.species}
                        </p>
                      }
                      <p style={{ marginTop: "5px" }}>{character.location.name}</p>
                    </CardText>
                  </CardContent>
                </CardContainer>
              </CardItem>
            </Link>
          </CardsWrapper>
        </ListDiv>)}
    </>
  )
}

export default Card;
