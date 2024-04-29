import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.isOpen ? "green" : "blue")};
`;

export const Logo = styled.div``;

export const Menu = styled.div`
  font-size: ${(props) => (props.isOpen ? "20px" : "16px")};
`;

export const Button = styled.button`
  padding: 3px 5px;

  &:hover {
    color: red;
  }
`;
