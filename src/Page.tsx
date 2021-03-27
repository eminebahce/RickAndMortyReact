import React, { useEffect, useState } from "react";
import GlobalStyle from './styles/globalStyles';
import Header from "./components/Header";
import Card from "./components/Card";
import CardDetails from "./components/CardDetails";
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_QUERY } from "./queries/CharactersQuery";
import { Content } from "./styles/cardStyles";
import { ErrorDiv } from './styles/errorStyles';
import RickAndMorty from './assets/rickmortynotfound.png';
import {
  Character,
  CharactersData,
  CharacterVars
} from './interfaces/ApiCallInterfaces';
import { Route, useLocation } from 'react-router-dom';

export const CharactersContext = React.createContext<Character[] | null>(null);

function Page() {
  const location = useLocation();
  const [page, setPage] = useState<number>(1)
  const [name, setName] = useState<String>("")
  const [next, setNext] = useState<number | null>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const { error, data } = useQuery<CharactersData, CharacterVars>(GET_CHARACTERS_QUERY, { variables: { page: page, name: name } });

  useEffect(() => {
    if (data) {
      setNext(data.characters.info.next)
      setCharacters((prev) => [...prev, ...data.characters.results])
    }
  }, [data]);

  const searchCharacter = (searchedCharacter: String) => {
    if (searchedCharacter !== name) {
      setCharacters([])
      setNext(null)
      setPage(1)
      setName(searchedCharacter)
    }
  };

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight && next != null) {
      setPage(next)
    }
  };

  return (
      <Content onScroll={handleScroll}>
        <GlobalStyle />
        <Header title="Rick and Morty" searchCharacter={searchCharacter}></Header>
        <Card characters={characters}></Card>
        {error && location.pathname === '/' &&
          <ErrorDiv>
            <img src={RickAndMorty} alt="Character Not found" />
          </ErrorDiv>
        }
        <CharactersContext.Provider value={characters}>
          <Route path='/CardDetails/:id' component={CardDetails} />
        </CharactersContext.Provider>
      </Content>
  );
}

export default Page;
