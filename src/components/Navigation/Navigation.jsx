import { useState } from "react";
import {
  Container,
  Logo,
  Menu,
  Item,
  Cart,
  Avatar,
  IconsBox,
  LogoMenuBox,
  Notification,
} from "./Navigation";

function Navigation() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container>
      <LogoMenuBox>
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
        <Cart src="./images/icon-cart.svg" alt="cart icon" />
        <Notification>3</Notification>
        <Avatar src="./images/image-avatar.png" alt="avatar" />
      </IconsBox>
    </Container>
  );
}

export default Navigation;
