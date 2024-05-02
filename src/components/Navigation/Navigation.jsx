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
} from "./Navigation";
import Cart from "../Cart/Cart.jsx";

function Navigation({ quantity, setQuantity }) {
  return (
    <Container>
      <LogoMenuBox>
        <Hamburger>
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
    </Container>
  );
}

export default Navigation;
