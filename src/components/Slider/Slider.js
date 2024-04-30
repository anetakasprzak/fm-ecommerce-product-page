import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  max-width: 55rem;

  // TEMPORARY !!
  margin-left: 3rem;
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  gap: 3rem;
  max-width: 44rem;
`;

export const MainImg = styled.img`
  border-radius: 1.5rem;
`;

export const ThumbnailImg = styled.img`
  border-radius: 1rem;
  max-width: 8.8rem;
`;

export const MainImgContainer = styled.div`
  position: relative;
`;

export const Left = styled.button`
  position: absolute;
  top: 50%;
  left: -5%;
  transform: translateY(-50%, -50%);

  border: none;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.button`
  position: absolute;
  top: 50%;
  right: -5%;
  transform: translateY(-50%, -50%);

  border: none;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
