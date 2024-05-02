import { useState } from "react";
import {
  Container,
  MainImg,
  ThumbnailImg,
  ThumbnailWrapper,
  MainImgContainer,
  Left,
  Right,
  ThumbnailContainer,
  CloseModal,
} from "./Slider";

const data = [
  {
    id: 0,
    thumbnail: "./images/image-product-1-thumbnail.jpg",
    image: "./images/image-product-1.jpg",
  },
  {
    id: 1,
    thumbnail: "./images/image-product-2-thumbnail.jpg",
    image: "./images/image-product-2.jpg",
  },
  {
    id: 2,
    thumbnail: "./images/image-product-3-thumbnail.jpg",
    image: "./images/image-product-3.jpg",
  },
  {
    id: 3,
    thumbnail: "./images/image-product-4-thumbnail.jpg",
    image: "./images/image-product-4.jpg",
  },
];

function Slider({ isInModal, setIsModalOpen }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkNumber = (newIndex) => {
    if (newIndex > data.length - 1) {
      return 0;
    }
    if (newIndex < 0) {
      return data.length - 1;
    }

    return newIndex;
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <Container isInModal={isInModal}>
      {isInModal && (
        <CloseModal>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z"
              fill="white"
            />
          </svg>
        </CloseModal>
      )}
      <MainImgContainer>
        {isInModal && (
          <Left onClick={prevImage}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </Left>
        )}

        <MainImg
          src={data[currentIndex].image}
          alt="Shoes image"
          onClick={() => setIsModalOpen(true)}
        />

        {isInModal && (
          <Right onClick={nextImage}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </Right>
        )}
      </MainImgContainer>
      <ThumbnailWrapper>
        {data?.map((item) => (
          <ThumbnailContainer
            key={item.id}
            isActive={currentIndex === item.id}
            onClick={() => setCurrentIndex(item.id)}
          >
            <ThumbnailImg
              src={item.thumbnail}
              alt="shoes thumbnail"
              isActive={currentIndex === item.id}
            />
          </ThumbnailContainer>
        ))}
      </ThumbnailWrapper>
    </Container>
  );
}

export default Slider;
