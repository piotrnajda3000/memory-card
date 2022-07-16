import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components/macro";
import theme from "./styles/theme";

import Cards from "./components/Cards";
import cardsData from "./components/cardsData";

import Scoreboard from "./components/Scoreboard";

import Modal from "./components/Modal";

import { useState } from "react";
import { helpModal, WinModal } from "./components/modals";

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

      // Trigger "Continue?" modal
      if (hasWon) setIsOpen(true);

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
    restartGame: () => {
      setGame({
        scoreCurrent: 0,
        scoreBest: 0,
        hasWon: false,
      });
      setIsOpen(false);
    },
  };

  const [isOpen, setIsOpen] = useState(true);

  const GameLayout = (
    <>
      <Modal iconTop isOpen={isOpen} onClick={() => setIsOpen(false)}>
        {helpModal}
      </Modal>
      <Scoreboard
        scoreCurrent={game.scoreCurrent}
        scoreBest={game.scoreBest}
        cardCount={cardsData.length}
      />
      <Cards cards={cardsData} gameInterface={gameInterface} />
    </>
  );

  const WinLayout = (
    <Modal iconBottom isOpen={isOpen}>
      <WinModal onIconClick={gameInterface.restartGame} />
    </Modal>
  );

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
