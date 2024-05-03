import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  @media screen and (max-width: 64em) {
    max-width: 40rem;
  }

  @media screen and (max-width: 54em) {
    max-width: 38rem;
    gap: 2.4rem;
  }

  @media screen and (max-width: 52em) {
    max-width: 50rem;
    align-items: center;
    text-align: center;
  }
`;

export const Subheading = styled.h4`
  color: #ff7e1b;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const Heading = styled.h1`
  color: #1d2026;
  font-size: 4.4rem;
  line-height: 4.8rem;
  font-weight: 700;
  margin-bottom: 0.4rem;

  @media screen and (max-width: 64em) {
    font-size: 4rem;
    line-height: 4.2rem;
  }

  @media screen and (max-width: 54em) {
    font-size: 3.8rem;
    line-height: 4rem;
    margin-bottom: 0rem;
  }

  @media screen and (max-width: 52em) {
    font-size: 4.2rem;
    line-height: 4.4rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 30em) {
    font-size: 3.6rem;
    line-height: 4rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 25.6em) {
    font-size: 3.4rem;
    margin-bottom: 0.3rem;
  }
`;

export const ProductDescription = styled.p`
  line-height: 2.6rem;

  @media screen and (max-width: 25.6em) {
    font-size: 1.5rem;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const CurrentPriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const CurrentPrice = styled.p`
  color: #1d2026;
  font-size: 2.8rem;
  font-weight: 700;
`;

export const SalePercentage = styled.span`
  color: #ff7e1b;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #ffeee2;
  border-radius: 0.6rem;
  padding: 0.3rem 0.8rem;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: #b6bcc8;
  line-height: 2.6rem;
`;

export const AddToCartBox = styled.div`
  display: flex;
  gap: 1.6rem;

  @media screen and (max-width: 27.8em) {
    flex-direction: column;
  }
`;

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  width: 17rem;
  box-shadow: 0rem 2rem 5rem -2.5rem grey;

  gap: 4.5rem;
  background-color: #f6f8fd;
  border-radius: 1rem;
  padding: 0 2rem;

  @media screen and (max-width: 64em) {
    width: 15rem;
    gap: 3.7rem;
  }

  @media screen and (max-width: 52em) {
    width: 17rem;
  }

  @media screen and (max-width: 27.8em) {
    width: 100%;
    justify-content: center;
    padding: 2rem;
    gap: 6rem;
  }
`;

export const ButtonLess = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

export const Quantity = styled.p`
  color: #1d2026;
  font-weight: 700;
`;

export const ButtonMore = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-radius: 1rem;
  background-color: #ff7e1b;
  box-shadow: 0rem 2rem 5rem -2.5rem #ff7e1b;
  border: none;
  padding: 2rem 7.6rem;
  text-wrap: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  span {
    color: #fff;
    font-weight: 700;
  }

  &:hover {
    opacity: 0.75;
  }

  &:active {
    transform: translateY(0.5rem);
  }

  @media screen and (max-width: 64em) {
    padding: 2rem 5rem;
  }

  @media screen and (max-width: 52em) {
    padding: 2rem 6.4rem;
  }

  @media screen and (max-width: 27.8em) {
    padding: 2rem 7.8rem;
  }
`;
