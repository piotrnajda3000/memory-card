import React from "react";
import styled from "styled-components/macro";

export default function Scoreboard({ scoreCurrent, scoreBest, cardCount }) {
  return (
    <SScoreboard>
      <span>
        Score: {scoreCurrent} / {cardCount}
      </span>
      <span>Best score: {scoreBest}</span>
    </SScoreboard>
  );
}

const SScoreboard = styled.div`
  position: relative;
  z-index: 2;

  height: 36px;

  max-width: 70ch;
  padding-block: 8px;
  background: white;
  margin: auto;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
