import {
  Container,
  Subheading,
  Heading,
  ProductDescription,
  PriceBox,
  CurrentPriceBox,
  SalePercentage,
  CurrentPrice,
  OldPrice,
  AddToCartBox,
  QuantityBox,
  ButtonLess,
  Quantity,
  ButtonMore,
  ButtonAdd,
} from "./ProductDetails";

function ProductDetails() {
  return (
    <Container>
      <Subheading>Sneaker Company</Subheading>
      <Heading>Fall Limited Edition Sneakers</Heading>
      <ProductDescription>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </ProductDescription>
      <PriceBox>
        <CurrentPriceBox>
          <CurrentPrice>$125.00</CurrentPrice>
          <SalePercentage>50%</SalePercentage>
        </CurrentPriceBox>
        <OldPrice>$250.00</OldPrice>
      </PriceBox>

      <AddToCartBox>
        <QuantityBox>
          <ButtonLess>
            <img src="../../../public/images/icon-minus.svg" />
          </ButtonLess>
          <Quantity>0</Quantity>
          <ButtonMore>
            <img src="../../../public/images/icon-plus.svg" />
          </ButtonMore>
        </QuantityBox>
        <ButtonAdd>
          <img src="../../../public/images/icon-cart.svg" />
          <span>Add to cart</span>
        </ButtonAdd>
      </AddToCartBox>
    </Container>
  );
}

export default ProductDetails;
