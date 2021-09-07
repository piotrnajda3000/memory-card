import uniqid from "uniqid";

import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpeg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.jpg";
import nine from "../assets/9.jpeg";
import ten from "../assets/10.jpg";
import eleven from "../assets/11.jpg";
import twelve from "../assets/12.jpg";

const Card = (img) => {
  return {
    id: uniqid(),
    img,
  };
};

const cards = [
  Card(one),
  Card(two),
  Card(three),
  Card(four),
  Card(five),
  Card(six),
  Card(seven),
  Card(eight),
  Card(nine),
  Card(ten),
  Card(eleven),
  Card(twelve),
];

export default cards;
