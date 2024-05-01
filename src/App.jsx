import { useState } from "react";
import { Wrapper } from "./App.js";
import Navigation from "./components/Navigation/Navigation.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Modal from "./components/Modal/Modal.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      <Navigation />
      <Slider isInModal={false} setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <Modal>
          <Slider isInModal />
        </Modal>
      )}
    </Wrapper>
  );
}

export default App;
