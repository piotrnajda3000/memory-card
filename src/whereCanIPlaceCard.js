import uniqid from "uniqid";

import one from "./images/1.jpg";
import two from "./images/2.jpeg";
import three from "./images/3.jpg";
import four from "./images/4.jpg";
import five from "./images/5.jpg";
import six from "./images/6.jpg";
import seven from "./images/7.jpg";
import eight from "./images/8.jpg";
import nine from "./images/9.jpeg";
import ten from "./images/10.jpg";
import eleven from "./images/11.jpg";
import twelve from "./images/12.jpg";

const Card = (img, text) => {
  return {
    id: uniqid(),
    text,
    img,
  };
};

const cards = [
  Card(one, "Butter Chicken"),
  Card(two, "Aloo Gobi Masala"),
  Card(three, "Samosa"),
  Card(four, "Matar Paneer"),
  Card(five, "Vegan Tofu Tikka Masala"),
  Card(six, "Lamb Curry"),
  Card(seven, "Masala Chai"),
  Card(eight, "Chicken Tikka Masala"),
  Card(nine, "Butter Chicken"),
  Card(ten, "Garlic Naan"),
  Card(eleven, "Butter Naan"),
  Card(twelve, "Tandoori Chicken"),
];

export default cards;
