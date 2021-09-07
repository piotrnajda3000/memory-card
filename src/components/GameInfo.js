const GameInfo = ({ score, highScore, isWon }) => {
  return (
    <div id="gameInfo">
      <div id="scoreCurrent">Current {score}</div>
      <div id="gameWon">{isWon ? "You won!" : null}</div>
      <div id="scoreHigh"> Best {highScore} </div>
    </div>
  );
};

export default GameInfo;
