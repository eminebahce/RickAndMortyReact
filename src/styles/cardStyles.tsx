import styled  from "styled-components";

const ListDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
`;

const CardsWrapper = styled.ul`
  flex-wrap: wrap;
  list-style: none;
  
`;

const CardItem = styled.li`
  padding: 0.5rem;
  width: 200px;
  margin-left: 60px; 

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
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
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

const CardTitle = styled.div`
  color: white;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const CardText = styled.div`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  color: white;
`; 

const Content = styled.div`
  height: 1000px;
  overflow: auto;
`;

export { CardsWrapper,
         CardItem,
         CardContainer,
         CardContent,
         CardImage,
         CardTitle,
         CardText,
         ListDiv,
         Content
       }