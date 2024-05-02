import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 111rem;
  color: #69707d;
  margin: 0 auto;
  padding-top: 2rem;

  @media screen and (max-width: 75em) {
    padding: 2rem;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  gap: 12.5rem;
  padding: 7rem 3rem 3rem 3rem;
`;
