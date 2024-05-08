import {
  Container,
  Logo,
  Menu,
  Item,
  Avatar,
  IconsBox,
  LogoMenuBox,
  Notification,
  Hamburger,
  SideMenu,
  CloseMenuBtn,
  Overlay,
} from "./Navigation";
import Cart from "../Cart/Cart.jsx";
import { useState } from "react";

function Navigation({ quantity, setQuantity }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <LogoMenuBox>
        <Hamburger onClick={() => setIsVisible(true)}>
          <img src="./images/icon-menu.svg" />
        </Hamburger>
        <Logo src="./images/logo.svg" alt="Logo" />
        <Menu>
          <Item>
            <a href="#">Collections</a>
          </Item>
          <Item>
            <a href="#">Men</a>
          </Item>
          <Item>
            <a href="#">Women</a>
          </Item>
          <Item>
            <a href="#">About</a>
          </Item>
          <Item>
            <a href="#">Contact</a>
          </Item>
        </Menu>
      </LogoMenuBox>
      <IconsBox>
        <Cart quantity={quantity} setQuantity={setQuantity} />
        {quantity >= 1 && <Notification>{quantity}</Notification>}
        <Avatar src="./images/image-avatar.png" alt="avatar" />
      </IconsBox>

      <SideMenu isVisible={isVisible}>
        <CloseMenuBtn onClick={() => setIsVisible(false)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z"
              fill="#69707D"
            />
          </svg>
        </CloseMenuBtn>
        <Item>
          <a href="#">Collections</a>
        </Item>
        <Item>
          <a href="#">Men</a>
        </Item>
        <Item>
          <a href="#">Women</a>
        </Item>
        <Item>
          <a href="#">About</a>
        </Item>
        <Item>
          <a href="#">Contact</a>
        </Item>
      </SideMenu>
      <Overlay isVisible={isVisible} />
    </Container>
  );
}

export default Navigation;
