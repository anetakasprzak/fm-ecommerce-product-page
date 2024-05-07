import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  z-index: 5;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const CloseModal = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  position: absolute;
  top: -3.5rem;
  right: 0;

  svg {
    fill: white;
    transition: all 0.2s;
  }

  svg:hover {
    fill: #ff7e1b;
  }
`;
