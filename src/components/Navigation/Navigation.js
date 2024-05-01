import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoMenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5.6rem;
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
    color: inherit;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5rem;
`;

export const Cart = styled.img``;

export const Avatar = styled.img`
  height: 5rem;
`;
