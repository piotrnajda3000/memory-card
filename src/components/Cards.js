const Cards = ({ cards, handleCardClick }) => {
  return (
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
  );
};

export default Cards;