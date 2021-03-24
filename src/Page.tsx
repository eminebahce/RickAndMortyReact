import React, { useEffect, useState } from "react";
import GlobalStyle from './styles/globalStyles';
import Header from "./components/Header";
import Card from "./components/Card";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_QUERY } from "./queries/CharactersQuery";
import { Content } from "./styles/cardStyles";

interface Info {
  next: number
}
interface Location {
  name: String
}
interface Episode {
  id: number
  name: String
  air_date: String
  episode: String
  created: String
}
export interface Character {
  id: number
  name: String
  location: Location
  status: String
  origin: Location
  image: String
  gender: String
  species: String
  episode: Episode[]
}
export interface Characters {
  info: Info
  results: Character[]
}
interface CharactersData {
  characters: Characters
}
interface CharacterVars {
  page: number
  name: String
}

function Page() {
  const [page, setPage] = useState<number>(1)
  const [name, setName] = useState<String>("")
  const [next, setNext] = useState<number | null>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const { error, loading, data } = useQuery<CharactersData, CharacterVars>(GET_CHARACTERS_QUERY, { variables: { page: page, name: name } });

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

    if (scrollHeight - scrollTop == clientHeight && next != null) {
      setPage(next)
    }
  };

  return (
    <Router>
      <Content onScroll={handleScroll}>
        <GlobalStyle />
        <Header title="Rick and Morty" searchCharacter={searchCharacter}></Header>
        <Card characters={characters}></Card>
      </Content>
    </Router>
  );
}

export default Page;
