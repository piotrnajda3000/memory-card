import uniqid from "uniqid";

import one from "../assets/1.jpg";
import two from "../assets/2.jpeg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.jpg";
import nine from "../assets/9.jpeg";
import ten from "../assets/10.jpg";
import eleven from "../assets/11.jpg";
import twelve from "../assets/12.jpg";

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
