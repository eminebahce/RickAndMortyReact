import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  TitleHeader,
  SearchDiv,
  SearchInput,
}from '../styles/headerStyles';

const Header = ({ title, searchCharacter }: { title: String, searchCharacter: (param: String) => void}) => {
  const location = useLocation();

  const onKeywordPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const search = document.querySelector(".search") as HTMLInputElement;
      searchCharacter(search.value)
    }
  };

  return (
    <>
      <TitleHeader>
        <h1>{title}</h1>
      </TitleHeader>
      {location.pathname === '/' && <SearchDiv>
        <SearchInput className="search" name="search" type="text" placeholder="Search" onKeyPress={onKeywordPress}></SearchInput>
      </SearchDiv>}
    </>
  )
};

export default Header;