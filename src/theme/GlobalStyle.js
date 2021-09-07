import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import init from "./init.js";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  ${init} 
  
  body {
    background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[8]});
    display: flex;
    justify-content: center;
  }

  #root {
    margin-inline: 1rem;
    display: flex;
    flex-direction: column;
    background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[8]});
  }
  
  #gameInfo {
    width: 100%;
    border-radius: 0 0 7px 7px;
    display: flex;
    justify-content: space-between;
    background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[9]});
  }
  
  #gameInfo div {
    padding: 1rem;
    flex: 1;
  }
  
  #scoreHigh {
    display: flex;
    justify-content: flex-end;
  }
  
  #gameWon {
    display: flex;
    justify-content: center;
  }
  
  #cardsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    flex: 1;
  }
  
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[9]});
    width: 300px;
    height: 200px;
    margin: 10px;
    padding: 7px;
    cursor: pointer;
    user-select: none;
  }
  
  .card img {
    border-radius: 7px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  `;
export default GlobalStyle;
