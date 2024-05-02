import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
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
`;

export const ProductDescription = styled.p`
  line-height: 2.6rem;
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
`;

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5rem;
  background-color: #f6f8fd;
  border-radius: 1rem;
  padding: 0 2rem;
`;

export const ButtonLess = styled.button`
  border: none;
  background-color: transparent;
`;

export const Quantity = styled.p`
  color: #1d2026;
  font-weight: 700;
`;

export const ButtonMore = styled.button`
  border: none;
  background-color: transparent;
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

  span {
    color: #fff;
    font-weight: 700;
  }
`;
