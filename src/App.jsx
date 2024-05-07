import { useState } from "react";
import { MainContainer, Wrapper } from "./App.js";
import Navigation from "./components/Navigation/Navigation.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Modal from "./components/Modal/Modal.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import useMediaQuery from "./hooks/useMediaQuery.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const isMobile = useMediaQuery("(max-width: 52em)");

  return (
    <Wrapper>
      <Navigation quantity={quantity} setQuantity={setQuantity} />
      <MainContainer>
        <Slider
          isInModal={false}
          setIsModalOpen={setIsModalOpen}
          isMobile={isMobile}
        />

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
