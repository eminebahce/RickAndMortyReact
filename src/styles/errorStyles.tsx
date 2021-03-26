import styled  from "styled-components";

const ErrorDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

img {
  height: auto;
  max-width: 50%;
  vertical-align: middle;
  }

p {
  position: absolute;
  color: white;
  top: 130px;

@media screen and (min-width: 688px) {
  top: 400px;
  font-weight: 800;
  }  
}  
`;

export { ErrorDiv };