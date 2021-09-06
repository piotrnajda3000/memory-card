import uniqid from "uniqid";

const Card = (imageUrl, text) => {
  return {
    id: uniqid(),
    image: imageUrl,
    text,
  };
};

const cards = [
  Card(null, "1"),
  Card(null, "2"),
  Card(null, "3"),
  Card(null, "4"),
  Card(null, "5"),
  Card(null, "6"),
  Card(null, "7"),
  Card(null, "8"),
  Card(null, "9"),
  Card(null, "10"),
  Card(null, "11"),
  Card(null, "12"),
];

export default cards;
