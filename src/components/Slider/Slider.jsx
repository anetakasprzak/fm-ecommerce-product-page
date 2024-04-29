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
  return (
    <div>
      <p>Slider</p>
      <img src={data[0].image} alt="Test" />
    </div>
  );
}

export default Slider;
