import { createGlobalStyle } from "styled-components";

import normalize from "./normalize.js";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[8]});
    display: flex;
    justify-content: center;
    word-break: keep-all;
  }

  #root {
    margin-inline: 1rem;
    display: flex;
    flex-direction: column;
    background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[8]});
  }
  
  #gameInfo {
    width: 100%;
    border-radius: 0 0 16px 16px;
    display: flex;
    justify-content: space-between;
    background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[9]});
  }
  
  #gameInfo div {
    padding-block: 7px;
    padding-inline: 16px;
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
    max-height: 100%;
    flex: 1;
  }
  
  .card {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-radius: 7px;
    background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[9]});
    width: 280px;
    height: 280px;
    margin: 7px;
    cursor: pointer;
    user-select: none;
    transition: all 500ms;
    padding-top: 16px;
  }
  
  .card img {
    border-radius: 7px 7px 16px 16px;
    width: 87%;
    height: 78%;
    object-fit: cover;
    object-position: center;
    transition: all 300ms;
    flex: 1;

  }

  .card p {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 7px;
    padding-top: 16px;
  }

  .card:hover {
    color: hsl(16, 94%, 50%);
    border-radius: 7px 7px 16px 16px;
  }

  .card:hover img {
    transform: scale(1.07)
  }

  `;
export default GlobalStyle;
