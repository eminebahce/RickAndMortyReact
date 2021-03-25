import React from 'react';
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
import { RouteComponentProps } from "react-router";
import { CharactersContext } from "../Page";
import { useContext } from "react";

interface Props extends RouteComponentProps<{ id: string }> {}

const CardDetails : React.FC<Props> = ({ match }) => {
  const characters = useContext(CharactersContext)!;
  const character = characters[Number(match.params.id)]
  return (
    <>
      {<ListDiv>
          <CardsWrapper>
            <CardItem>
              <CardContainer>
                <CardImage><img src={String(character.image)}></img></CardImage>
                <CardContent>
                  <CardTitle>{character.name}</CardTitle>
                  <CardText></CardText>
                </CardContent>
              </CardContainer>
            </CardItem>
          </CardsWrapper>
        </ListDiv>}
    </>
  )
}

export default CardDetails;