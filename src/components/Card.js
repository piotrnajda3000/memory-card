import React from "react";
import styled from "styled-components/macro";
import { elevation, verticalItem } from "../styles/mixins";
import Spacer from "../styles/components/Spacer";

const SCard = styled.div`
  ${verticalItem(-1)};
  text-align: center;

  background: white;
  cursor: pointer;
  border-radius: 10px;
  ${elevation("medium")};

  // Specific to this card

  img {
    border-radius: 10px 10px 0 0;
    transform: scale(0.9);
    transition: transform 0.15s ease-out;
    height: 300px;
    object-fit: cover;
  }

  .heading {
    font-size: 14px;
    transform: translateY(-5px);
    transition: all 0.15s ease-out;
    color: hsl(0, 0%, 26%);
  }

  &:hover {
    img {
      transform: scale(1);
      transition: transform 0.15s ease-in;
    }
    .heading {
      transform: translateY(2px);
      color: hsl(22, 94%, 50%);
      transition: all 0.15s ease-in;
    }
  }
`;

export default function Card({ heading, image, onClick }) {
  return (
    <SCard onClick={() => onClick(image)}>
      <img src={image} />
      <span className="heading">{heading}</span>
      <Spacer axis="y" size="4" />
    </SCard>
  );
}
