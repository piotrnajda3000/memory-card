import React from "react";
import styled from "styled-components/macro";
import Card from "./Card";
import lambCurry from "../assets/lamb-curry.jpg";

const SCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: repeat(auto-fit);
  padding: 10px;
`;

export default function Cards() {
  return (
    <SCards>
      <Card heading="Lamb Curry" image={lambCurry} />
    </SCards>
  );
}
