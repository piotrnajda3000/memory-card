import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import Card from "./Card";
import { createShuffled } from "./utils";

export default function Cards({ gameInterface, ...props }) {
  const [cards, setCards] = useState(props.cards);
  const [clickedCards, setClickedCards] = useState([]);

  // Shuffle cards on mount and after clicking on a card
  useEffect(() => {
    setCards(createShuffled(cards));
  }, [clickedCards]);

  const onCardClick = (card) => {
    if (clickedCards.includes(card) === false) {
      gameInterface.handleScoreAdd();
      setClickedCards([...clickedCards, card]);
    } else {
      gameInterface.handleWrongGuess();
      setClickedCards([]);
    }
  };

  return (
    <SCards>
      {cards.map((card) => (
        <Card
          key={card.src}
          heading={card.heading}
          image={card.src}
          onClick={onCardClick}
        />
      ))}
    </SCards>
  );
}

const SCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 32px;
  justify-content: center;

  margin: auto;
  max-width: 1300px;

  padding: 32px clamp(0.5rem, 2%, 2rem);
`;
