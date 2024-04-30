import { useState } from "react";
import { Container, Logo, Menu, Item } from "./Navigation";

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
    </Container>
  );
}

export default Navigation;
