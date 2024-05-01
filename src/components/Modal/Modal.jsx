import { Content, Overlay } from "./Modal";

function Modal({ children }) {
  return (
    <Overlay>
      <Content>{children}</Content>
    </Overlay>
  );
}

export default Modal;
