import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.8rem;
  border-bottom: 1px solid #e4e9f2;

  @media screen and (max-width: 30em) {
    padding: 1rem 1rem;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 52.5em) {
    display: block;
  }
`;

export const LogoMenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5.6rem;

  @media screen and (max-width: 52.5em) {
    gap: 3rem;
  }

  @media screen and (max-width: 25.6em) {
    gap: 2rem;
  }
`;

export const Logo = styled.img`
  @media screen and (max-width: 30em) {
    width: 13rem;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 3.2rem;

  @media screen and (max-width: 52.5em) {
    display: none;
  }
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

  @media screen and (max-width: 25.6em) {
    gap: 2rem;
  }
`;

export const Notification = styled.span`
  position: absolute;
  top: 0.8rem;
  right: 8.9rem;
  font-size: 1rem;
  line-height: 1;
  font-weight: 700;
  padding: 0.2rem 0.7rem;
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
