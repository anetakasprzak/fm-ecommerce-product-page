import { useState } from "react";
import {
  Container,
  MainImg,
  ThumbnailImg,
  ThumbnailWrapper,
  MainImgContainer,
  Left,
  Right,
} from "./Slider";

const data = [
  {
    id: 1,
    thumbnail: "./images/image-product-1-thumbnail.jpg",
    image: "./images/image-product-1.jpg",
  },
  {
    id: 2,
    thumbnail: "./images/image-product-2-thumbnail.jpg",
    image: "./images/image-product-2.jpg",
  },
  {
    id: 3,
    thumbnail: "./images/image-product-3-thumbnail.jpg",
    image: "./images/image-product-3.jpg",
  },
  {
    id: 4,
    thumbnail: "./images/image-product-4-thumbnail.jpg",
    image: "./images/image-product-4.jpg",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <MainImgContainer>
        <Left>
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
        <MainImg src={data[index].image} alt="Shoes image" />
        <Right>
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
      </MainImgContainer>
      <ThumbnailWrapper>
        {data?.map((item) => (
          <div key={item.id}>
            <ThumbnailImg src={item.thumbnail} alt="shoes thumbnail" />
          </div>
        ))}
      </ThumbnailWrapper>
    </Container>
  );
}

export default Slider;
