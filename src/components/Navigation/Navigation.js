import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.isOpen ? "green" : "blue")};
`;

export const Logo = styled.img``;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 3.2rem;
`;

export const Item = styled.li`
  a {
    text-decoration: none;
  }
`;
