import React, { useEffect, useState } from "react";
import GlobalStyle from './styles/globalStyles';
import Header from "./components/Header";
import Card from "./components/Card";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_QUERY } from "./queries/CharactersQuery";

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

  return (
      <Router>
        <GlobalStyle />
        <Header title="Rick and Morty" showSearchBar={true} ></Header>
       <Card characters={characters}></Card>
      </Router>
  );
}

export default Page;
