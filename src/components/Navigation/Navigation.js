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

  @media screen and (max-width: 25.6em) {
    right: 6.5rem;
  }
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

export const SideMenu = styled.ul`
  background-color: #fff;
  padding: 4rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  z-index: 6;
  transform: ${(props) =>
    props.isVisible ? "translateX(0px)" : "translateX(-429px)"};
  transition: all 0.2s ease-out;

  li {
    font-size: 2.2rem;
    color: #1d2026;
    font-weight: 700;
    line-height: 2.6rem;
  }

  @media screen and (max-width: 30em) {
    padding: 2.5rem 3rem;
    width: 60vw;

    li {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  @media screen and (max-width: 24em) {
    width: 65vw;

    li {
      font-size: 1.8rem;
    }
  }
`;

export const CloseMenuBtn = styled.div`
  margin-bottom: 2rem;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;

  display: ${(props) => (props.isVisible ? "block" : "none")};
`;
