import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.8rem;
  border-bottom: 1px solid #e4e9f2;
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
    transition: all 0.2s;
    padding-bottom: 4.1rem;

    &:hover {
      color: #1d2026;
      border-bottom: 2.5px solid #ff7e1b;
    }
  }
`;

export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5rem;
  position: relative;
`;

export const Cart = styled.img`
  cursor: pointer;
`;

export const Notification = styled.span`
  position: absolute;
  top: 1rem;
  right: 8.9rem;
  font-size: 1rem;
  line-height: 1;
  font-weight: 700;
  padding: 0.1rem 0.6rem;
  border-radius: 6.5px;
  color: #fff;
  background-color: #ff7e1b;
`;

export const Avatar = styled.img`
  height: 5rem;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border: 2px solid #ff7e1b;
  }
`;
