import React from 'react';
import { useLocation } from 'react-router-dom';
import { TitleHeader, 
         SearchDiv,
         SearchInput,
        } 
from '../styles/headerStyles';

const Header = ({title, showSearchBar} : {title: String, showSearchBar: boolean}) => {
  const location = useLocation();

  const onClick = () => {
    const clearIcon = document.querySelector(".clear-icon") as HTMLImageElement;
    const searchBar = document.querySelector(".search") as HTMLInputElement;

    searchBar.addEventListener("keyup", () => {
      if(searchBar.value && clearIcon.style.visibility !== "visible"){
        clearIcon.style.visibility = "visible";
      } else if(!searchBar.value) {
        clearIcon.style.visibility = "hidden";
      }
    });

    clearIcon.addEventListener("click", () => {
      searchBar.value = "";
      clearIcon.style.visibility = "hidden";
    })

  };

  return (
    <>
    <TitleHeader>
      <h1>{title}</h1>
    </TitleHeader>
    <SearchDiv>
    <SearchInput className="search" type="text" placeholder="Search"></SearchInput>
    </SearchDiv>
    </>
  )
};

export default Header;