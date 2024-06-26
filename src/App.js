import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 111rem;
  color: #69707d;
  margin: 0 auto;
  padding-top: 2rem;

  @media screen and (max-width: 77em) {
    padding: 2rem;
  }

  @media screen and (max-width: 30em) {
    padding: 1rem;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  align-items: center;

  gap: 12.5rem;
  padding: 7rem 0rem 3rem 3rem;

  @media screen and (max-width: 64em) {
    padding: 5rem 0rem 3rem 3rem;
    gap: 10rem;
  }

  @media screen and (max-width: 56.25em) {
    gap: 8rem;
  }

  @media screen and (max-width: 52em) {
    flex-direction: column;
    padding: 5rem 2rem 3rem 2rem;
  }

  @media screen and (max-width: 30em) {
    padding: 2rem 0rem 3rem 0rem;
    gap: 7rem;
  }

  @media screen and (max-width: 25.6em) {
    gap: 5rem;
  }
`;
