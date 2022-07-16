import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components/macro";
import theme from "./styles/theme";

import Cards from "./components/Cards";
import cardsData from "./components/cardsData";

import Scoreboard from "./components/Scoreboard";

import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    scoreCurrent: 0,
    scoreBest: 0,
    hasWon: false,
  });

  const gameInterface = {
    handleScoreAdd: () => {
      const scoreCurrent = game.scoreCurrent + 1;

      const scoreBest =
        scoreCurrent > game.scoreBest ? scoreCurrent : game.scoreBest;

      const hasWon = scoreCurrent === cardsData.length ? true : false;

      setGame({
        scoreCurrent,
        scoreBest,
        hasWon,
      });
    },
    handleWrongGuess: () => {
      setGame({
        scoreCurrent: 0,
        scoreBest:
          game.scoreCurrent > game.scoreBest
            ? game.scoreCurrent
            : game.scoreBest,
        hasWon: false,
      });
    },
  };

  const GameLayout = (
    <>
      <Scoreboard
        scoreCurrent={game.scoreCurrent}
        scoreBest={game.scoreBest}
        cardCount={cardsData.length}
      />
      <Cards cards={cardsData} gameInterface={gameInterface} />
    </>
  );

  const WinLayout = <>Congrats!</>;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {game.hasWon ? WinLayout : GameLayout}
      </>
    </ThemeProvider>
  );
}

export default App;
