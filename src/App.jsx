import { useState } from "react";
import { MainContainer, Wrapper } from "./App.js";
import Navigation from "./components/Navigation/Navigation.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Modal from "./components/Modal/Modal.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [quantity, setQuantity] = useState(0);

  return (
    <Wrapper>
      <Navigation quantity={quantity} setQuantity={setQuantity} />
      <MainContainer>
        <Slider isInModal={false} setIsModalOpen={setIsModalOpen} />

        <ProductDetails setQuantity={setQuantity} />
      </MainContainer>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <Slider isInModal />
        </Modal>
      )}
    </Wrapper>
  );
}

export default App;
