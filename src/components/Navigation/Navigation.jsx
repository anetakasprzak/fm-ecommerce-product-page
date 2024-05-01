import { useState } from "react";
import { Container, Logo, Menu, Item, Cart, Avatar } from "./Navigation";

function Navigation() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container>
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
      <Cart src="./images/icon-cart.svg" alt="cart icon" />
      <Avatar src="./images/image-avatar.png" alt="avatar" />
    </Container>
  );
}

export default Navigation;
