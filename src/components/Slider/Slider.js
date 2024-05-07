import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  max-width: ${(props) => (props.isInModal ? "55rem" : "44.5rem")};
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  gap: 3rem;
  max-width: 44rem;

  @media screen and (max-width: 30em) {
    display: none;
  }
`;

export const MainImg = styled.img`
  border-radius: 1.5rem;
  cursor: pointer;
`;

export const ThumbnailContainer = styled.div`
  border: ${(props) => (props.isActive ? "2px solid #ff7e1b" : "")};
  border-radius: 1rem;
  overflow: hidden;
  max-width: 8.8rem;
  cursor: pointer;
`;

export const ThumbnailImg = styled.img`
  opacity: ${(props) => (props.isActive ? "0.6" : "")};

  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    opacity: 60%;
  }

  &:active {
    opacity: 40%;
    border: 2.5px solid #ff7e1b;
  }
`;

export const MainImgContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 52.5em) {
    pointer-events: none;
  }

  @media screen and (max-width: 27.8em) {
    img {
      height: 32rem;
      width: 100vw;
    }
  }
`;

export const Left = styled.button`
  position: absolute;
  left: ${(props) => (props.isMobile ? "2%" : "-5%")};

  border: none;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: #fff;
    border: 2.5px solid #ff7e1b;
  }
`;

export const Right = styled.button`
  position: absolute;
  right: ${(props) => (props.isMobile ? "2%" : "-5%")};

  border: none;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: #fff;
    border: 2.5px solid #ff7e1b;
  }
`;
