const GameInfo = ({ score, highScore, isWon }) => {
  return (
    <div id="gameInfo">
      <div id="scoreCurrent">Current {score}</div>
      <div id="gameWon">{isWon ? "You won!" : "Memory Game"}</div>
      <div id="scoreHigh"> Best {highScore} </div>
    </div>
  );
};

export default GameInfo;
