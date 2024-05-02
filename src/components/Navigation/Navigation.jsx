import {
  Container,
  Logo,
  Menu,
  Item,
  Avatar,
  IconsBox,
  LogoMenuBox,
  Notification,
} from "./Navigation";
import Cart from "../Cart/Cart.jsx";

function Navigation() {
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
        <Cart />
        <Notification>3</Notification>
        <Avatar src="./images/image-avatar.png" alt="avatar" />
      </IconsBox>
    </Container>
  );
}

export default Navigation;
