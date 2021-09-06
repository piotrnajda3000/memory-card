import React, { Component } from "react";
import "../styles/App.css";

const App = ({ data }) => {
  return (
    <>
      <div id="gameInfo">
        <div id="scoreCurrent">Current {data.score.current}</div>
        <div id="gameWon">{data.isWon ? "You won!" : null}</div>
        <div id="scoreHigh"> Best {data.score.high} </div>
      </div>
      <div id="cardsContainer">
        {data.cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              {card.text}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
