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

export const CartBox = styled.div`
  min-height: 25.6rem;
  width: 36rem;
  padding: 2.4rem;
  position: absolute;
  top: 5.5rem;
  right: -5rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
`;

export const Heading = styled.h4`
  color: #1d2026;
  font-weight: 700;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #e4e9f2;
`;

export const ItemBox = styled.div`
  padding-top: 2.4rem;
  margin-bottom: 2.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.div`
  img {
    height: 5rem;
    border-radius: 0.4rem;
  }
`;

export const TextBox = styled.div``;

export const Description = styled.p``;

export const PriceBox = styled.p`
  display: flex;
  gap: 0.4rem;
`;

export const Price = styled.p``;

export const Quantity = styled.p``;

export const Sum = styled.p`
  color: #1d2026;
  font-weight: 700;
  margin-left: 0.6rem;
`;

export const DeleteIcon = styled.div`
  svg {
    fill: #c3cad9;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      fill: #ff7e1b;
    }
  }
`;

export const Button = styled.button`
  border: none;
  width: 100%;
  color: #fff;
  padding: 2.2rem;
  font-size: 1.6rem;
  font-weight: 700;
  background-color: #ff7e1b;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

export const EmptyCart = styled.p`
  display: grid;
  justify-content: center;
  margin-top: 7rem;
`;
