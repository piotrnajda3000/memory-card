import React from "react";
import { createPortal } from "react-dom";

import styled, { css } from "styled-components/macro";
import { elevation } from "../styles/mixins";

export default function Modal({ children, onClick, isOpen, ...props }) {
  if (!isOpen) return null;

  return createPortal(
    <Wrapper onClick={onClick && onClick}>
      <Overlay></Overlay>
      <SModal {...props}>{children}</SModal>
    </Wrapper>,
    document.getElementById("portal")
  );
}

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const SModal = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  ${elevation("medium")};
  cursor: pointer;

  ${(p) =>
    p.iconTop &&
    css`
      grid-template-rows: 1fr auto 1fr;
      grid-template-columns: auto auto;

      span {
        grid-area: 2 / 1 / 3 / 2;
      }

      svg {
        grid-area: 1 / 2 / 2 / -1;
      }
    `}

  ${(p) =>
    p.iconBottom &&
    css`
      cursor: auto;
      grid-template-rows: 1fr auto auto 1fr;
      grid-template-columns: auto;
      grid-auto-flow: column;

      span {
        grid-area: 2 / 1 / 3 / -1;
      }

      .choice {
        svg {
          cursor: pointer;
        }
        grid-area: 3 / 1 / 4 / -1;
      }
    `}

  display: grid;
  gap: 8px;

  width: fit-content;
  text-align: center;

  background: white;
  padding: 10px;
  border-radius: 10px;
`;
