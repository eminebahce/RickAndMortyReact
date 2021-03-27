import React from 'react';
import {
  CardsWrapper,
  CardContainer,
  CardContent,
  CardTitle,
  CardText,
  CardDetailsDiv,
  CardDetailsImage
} from '../styles/cardStyles';
import { RouteComponentProps } from "react-router";
import { CharactersContext } from "../Page";
import { useContext } from "react";
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { faBookDead } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { ErrorDiv } from '../styles/errorStyles';
import RickAndMorty from '../assets/rickmortynotfound.png';

interface Props extends RouteComponentProps<{ id: string }> { }

const CardDetails: React.FC<Props> = ({ match }) => {
  const characters = useContext(CharactersContext)!;
  const character = characters[Number(match.params.id)];
  let dateTime;
  if (character !== undefined) {
    const format = "YYYY-MM-DD HH:mm:ss"
    const date = new Date(String(character.episode[0].created));
    dateTime = moment(date).format(format);
  }
  return (
    <>
      {character && <CardDetailsDiv>
        <CardsWrapper>
          <CardContainer>
            <CardDetailsImage><img src={String(character.image)} alt="Character" /></CardDetailsImage>
            <CardContent>
              <CardTitle>{character.name}</CardTitle>
              <CardText>
                {character.status === 'Alive' &&
                  <p style={{ color: "green" }}>
                    <FontAwesomeIcon icon={faHeartbeat} style={{ color: "green" }} />
                    {character.status} - {character.species}
                  </p>
                }
                {character.status === 'Dead' &&
                  <p style={{ color: "red" }}>
                    <FontAwesomeIcon icon={faBookDead} style={{ color: "red" }} />
                    {character.status} - {character.species}
                  </p>
                }
                {character.status === 'unknown' &&
                  <p style={{ color: "yellow" }}>
                    <FontAwesomeIcon icon={faQuestion} style={{ color: "yellow" }} />
                    {character.status} - {character.species}
                  </p>
                }
                <p><span>Gender:</span>{character.gender}</p>
                <p><span>Origin:</span>{character.origin.name}</p>
                <p><span>Location:</span>{character.location.name}</p>
                <p><span>Number of episodes:</span>{character.episode.length}</p>
                <p><span>First episode:</span>{character.episode[0].episode}</p>
                <p><span>First episode air date:</span>{character.episode[0].air_date}</p>
                <p><span>First episode name:</span>{character.episode[0].name}</p>
                <p><span>First episode created date:</span>{dateTime}</p>
              </CardText>
            </CardContent>
          </CardContainer>
        </CardsWrapper>
      </CardDetailsDiv>
      }
      {!character &&
        <ErrorDiv>
          <img src={RickAndMorty} alt="Character Not Found" />
        </ErrorDiv>
      }
    </>
  )
}

export default CardDetails;