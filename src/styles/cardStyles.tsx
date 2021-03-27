import styled from "styled-components";

const FontStyle = styled.span`
  margin-right: 5px;
`;

const ListDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  transition: transform .2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardDetailsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardsWrapper = styled.ul`
  flex-wrap: wrap;
  list-style: none;

  a {
    text-decoration: none;
  }
  
`;

const CardItem = styled.li`
  padding: 0.5rem;
  width: 200px;
  margin-left: 60px; 
  cursor: pointer;
  

  @media(min-width: 40rem) {
    //width: 80%;
  }
  @media(min-width: 56rem) {
    //width: 80%;
  }
  /* @media(min-width: 375px) {
    margin-left: 88px;
  } */
  /* @media(min-width: 414px) {
    margin-left: 109px;
  } */
  /* @media(min-width: 768px) {
    margin-left: 43px;
  } */
`;

const CardContainer = styled.div`
  background-color: #7A9EB2;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

const CardImage = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  overflow: hidden;

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle; 
  }
`;

const CardDetailsImage = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  overflow: hidden;

  img {
    height: auto;
    width: 100%;
    vertical-align: middle; 
  }
`;

const CardTitle = styled.div`
  color: white;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
`;

const CardText = styled.div`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  color: white;

  p {
   margin-top: 10px;
  }
  span {
    font-weight: bolder;
    margin-right: 5px;
    color: #040E1D;
  }
`;

const Content = styled.div`
  height: 1000px;
  overflow: auto;
`;

export {
  CardsWrapper,
  CardItem,
  CardContainer,
  CardContent,
  CardImage,
  CardTitle,
  CardText,
  ListDiv,
  Content,
  CardDetailsDiv,
  FontStyle,
  CardDetailsImage,
}