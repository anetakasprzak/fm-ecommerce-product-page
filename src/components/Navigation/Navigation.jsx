import { useState } from "react";
import { Container, Logo, Menu, Button } from "./Navigation";

function Navigation() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container isOpen={isOpen} className="p4">
      <Logo>LOGO</Logo>
      <Menu isOpen={isOpen}>MENU</Menu>
      <Button onClick={() => setIsOpen(!isOpen)}>CLICK ME</Button>
    </Container>
  );
}

export default Navigation;
