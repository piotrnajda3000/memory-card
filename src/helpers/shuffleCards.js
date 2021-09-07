const buildAvailablePositions = (currentPosition, shuffledCards) => {
  const availablePositions = [...Array(13).keys()];
  availablePositions.splice(currentPosition, 1);
  shuffledCards.forEach((card, position) => {
    availablePositions.splice(
      availablePositions.findIndex((i) => i === position),
      1
    );
  });
  return availablePositions;
};

export default buildAvailablePositions;
