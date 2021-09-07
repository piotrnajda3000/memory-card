import React from "react";
import { useEffect, useState } from "react";

import buildAvailablePositions from "../helpers/shuffleCards";

import GameInfo from "./GameInfo";
import Cards from "./Cards";

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
    if (clickedCards.includes(cardID)) {
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
      <GameInfo score={score} highScore={highScore} isWon={isWon} />
      <Cards cards={cards} handleCardClick={handleCardClick} />
    </>
  );
};

export default App;
