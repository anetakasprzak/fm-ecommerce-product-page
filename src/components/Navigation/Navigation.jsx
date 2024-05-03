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
  Menu2,
} from "./Navigation";
import Cart from "../Cart/Cart.jsx";
import { useState } from "react";

function Navigation({ quantity, setQuantity }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <LogoMenuBox>
        <Hamburger onClick={() => setIsVisible(true)}>
          <img src="../../../public/images/icon-menu.svg" />
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
      <Menu2 isVisible={isVisible}>
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
      </Menu2>
    </Container>
  );
}

export default Navigation;
