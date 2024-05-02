import styled from "styled-components";

export const Icon = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;

  svg {
    fill: #69707d;
    transition: all 0.2s;
  }

  svg:hover {
    fill: #1d2026;
  }
`;

export const Box = styled.div`
  height: 25.6rem;
  width: 36rem;
  position: absolute;
  top: 5.5rem;
  right: -5rem;
  background-color: red;
`;
