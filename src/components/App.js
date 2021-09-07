import React from "react";
import { useEffect, useState } from "react";

import "../styles/App.css";

import buildAvailablePositions from "../helpers/shuffleCards";

const App = ({ unshuffledCards }) => {
  const [cards, setCards] = useState(unshuffledCards);
  const [isWon, setIsWon] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const shuffleCards = (cards) => {
    const shuffledCards = [];
    cards.forEach((card, currentPosition) => {
      const availablePositions = buildAvailablePositions(
        currentPosition,
        shuffledCards
      );

      const randomPosition =
        availablePositions[
          Math.floor(Math.random() * availablePositions.length)
        ];

      shuffledCards[randomPosition] = card;
    });

    return shuffledCards;
  };

  const resetGame = () => {
    setClickedCards([]);
    setHighScore(score);
    setScore(0);
  };

  const handleCardClick = (cardID) => {
    if (clickedCards.some((clickedCard) => clickedCard === cardID)) {
      resetGame();
    } else {
      setScore((prevScore) => prevScore + 1);
      setClickedCards((prevClickedCards) => [...prevClickedCards, cardID]);
    }
    setCards(shuffleCards(cards));
  };

  useEffect(() => {
    setCards(shuffleCards(cards));
  }, []);

  useEffect(() => {
    if (score === 12) {
      setIsWon(true);
    }
  }, [score]);

  return (
    <>
      <div id="gameInfoWrapper">
        <div id="gameInfo">
          <div id="scoreCurrent">Current {score}</div>
          <div id="gameWon">{isWon ? "You won!" : null}</div>
          <div id="scoreHigh"> Best {highScore} </div>
        </div>
      </div>
      <div id="cardsContainer">
        {cards.map((card, idx) => {
          return (
            <div
              className="card"
              key={card.id}
              onClick={() => handleCardClick(card.id)}
            >
              <img src={card.img} alt={idx} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
