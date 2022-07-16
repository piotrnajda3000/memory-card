import React from "react";
import styled from "styled-components/macro";

export default function Scoreboard({ scoreCurrent, scoreBest, cardCount }) {
  return (
    <SScoreboard>
      score: {scoreCurrent} / {cardCount} best score: {scoreBest}
    </SScoreboard>
  );
}

const SScoreboard = styled.div``;
