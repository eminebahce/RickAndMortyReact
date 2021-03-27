import styled from "styled-components";

const TitleHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SEGA LOGO FONT";
  color: #455A64;
  margin-bottom: 50px;
  margin-top: 20px;
  padding: 50px 0px 0px 0px;
  

  @media screen and (min-width: 688px) {
    font-size: 50px;
  }

  h1 {
    font-weight: 200;
    margin-left: 10px;
    font-size: 20px;

    @media screen and (min-width: 688px) {
      font-size: 50px;
    }
  }
`;

const SearchDiv = styled.div`
  position: relative;
  display: flex; 
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 688px) {
    margin-bottom: 50px;
  }
`;

const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  font-size: 16px;
  border: solid 1px #455A64;
  border-radius: 5px;
  padding: 7px 20px;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background-color: #B7B7B7;
  text-align: left;

  @media screen and (min-width: 688px) {
    width: 470px;
  }
`;

export {
  TitleHeader,
  SearchDiv,
  SearchInput,
}