import React from "react";
import { createPortal } from "react-dom";

import styled, { css } from "styled-components/macro";
import { elevation } from "../styles/mixins";

import { mdiCloseBox } from "@mdi/js";

import SIcon from "../styles/components/SIcon";

export default function Modal({ onClick, isOpen, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClick}
      css={`
        position: relative;
        z-index: 2;
      `}
    >
      <Overlay></Overlay>
      <SModal>
        <span>
          To win, click all the cards, without clicking the same one twice.
        </span>
        <SIcon path={mdiCloseBox} $dark />
      </SModal>
    </div>,
    document.getElementById("portal")
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const SModal = styled.div`
  cursor: pointer;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  ${elevation("medium")};

  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: auto auto;
  width: fit-content;
  background: white;

  padding: 10px;
  border-radius: 10px;
  text-align: center;

  gap: 8px;

  span {
    grid-area: 2 / 1 / 3 / 2;
  }

  svg {
    grid-area: 1 / 2 / 2 / -1;
  }
`;
