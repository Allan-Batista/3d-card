import { motion } from "framer-motion";
import styled from "styled-components";
import { renderGradient } from "../utils";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

  background-color: #000;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;
  cursor: pointer;

  perspective: 2000;
`;

export const CardWrapper = styled(motion.div)`
  width: 55rem;
  height: 80rem;

  display: grid;
  place-items: center;

  overflow: hidden;
`;

export const Card = styled.div`
  width: 30rem;
  height: 55rem;

  background: #eee;
  border-radius: 2.5rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.7);

  position: relative;
`;

export const CTop = styled.div`
  width: 100%;
  height: 50%;

  padding: 3rem;
  border-radius: 2.5rem 2.5rem 0 0;
  transition: background 0.5s;

  background-image: linear-gradient(
    ${({ currentColor }) => renderGradient(currentColor)}
  );
`;

export const Logo = styled.img`
  width: 8rem;

  margin-bottom: 2rem;
`;

export const CTopText = styled.div`
  color: #fff;
`;

export const CTopTitle = styled.h1`
  font-weight: 600;
  text-transform: uppercase;

  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-weight: 400;
  letter-spacing: 0.1rem;
`;

export const Shoes = styled(motion.div)`
  height: 10%;
  user-select: none;

  img {
    user-select: none;
  }
`;

export const ShoeOne = styled(motion.img)`
  width: 25rem;
  position: absolute;

  top: -10rem;
  right: -14rem;

  transition: transform 1s;
`;

export const ShoeTwo = styled(motion.img)`
  width: 30rem;
  position: absolute;

  top: -10rem;
  right: -55rem;

  transition: transform 1s;
`;

export const ShoeThree = styled(motion.img)`
  width: 30rem;
  position: absolute;

  top: -10rem;
  right: -55rem;

  transition: transform 1s;
`;

export const CBottom = styled.div`
  width: 100%;
  height: 50%;

  padding: 2rem 3rem;
`;

export const CBottomTitle = styled.h1`
  font-weight: 500;
  text-transform: uppercase;

  letter-spacing: 0.1rem;

  color: #333;

  margin-bottom: 0.6rem;
`;

export const Badge = styled.div`
  position: absolute;

  top: 30rem;
  right: 5rem;

  width: 3.5rem;
  height: 1.6rem;

  background: #25d390;
  color: #fff;

  display: grid;
  place-items: center;

  border-radius: 0.3rem;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;

  font-weight: bold;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 400;

  text-transform: uppercase;
  margin-bottom: 0.6rem;
`;

export const Stars = styled.div`
  margin-bottom: 3rem;

  i:last-child {
    opacity: 0.4;
  }
`;

export const Size = styled.div`
  margin-bottom: 3rem;
`;

export const SizeTitle = styled.h3`
  font-size: 1.2rem;
  text-transform: uppercase;

  letter-spacing: 0.1rem;
  margin-bottom: 1.3rem;
`;

export const Sizes = styled.div`
  display: flex;

  span {
    font-size: 1.3rem;
    margin-right: 2.5rem;
  }

  span:nth-child(3) {
    width: 2rem;
    height: 2rem;

    background: #25d393;
    color: #fff;

    border-radius: 50%;
    display: grid;

    place-items: center;
  }
`;

export const ColorTitle = styled.h3`
  font-size: 1.2rem;
  text-transform: uppercase;

  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
`;

export const Colors = styled.div`
  display: flex;

  .color-1,
  .color-2,
  .color-3 {
    width: 2rem;
    height: 2rem;

    border-radius: 50%;
    cursor: pointer;
  }

  .color-1 {
    background:#452A5B;
    margin-right: 1.5rem;
    box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.2);
  }

  .color-2 {
    background: #bdc1cb;
    margin-right: 1.5rem;
    box-shadow: 0 1rem 2rem rgba(190, 194, 205, 1);
  }

  .color-3 {
    background: #007fba;
    box-shadow: 0 1rem 3rem rgba(0, 160, 186, 1);
  }
`;

export const Price = styled.div`
  width: 16rem;
  height: 4rem;

  background: ${({ currentColor }) =>
    currentColor === 1 ? "#452A5B" : "#BDC1CB"};
  background: ${({ currentColor }) => (currentColor === 3 ? "#007fba" : "")};
  color: #fff;

  border-radius: 0.5rem;
  position: absolute;

  right: -1rem;
  bottom: 3rem;

  box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.5);
  display: flex;

  justify-content: center;
  align-items: center;

  transition: background 0.5s;

  span {
    font-size: 2rem;
  }

  span:first-child {
    font-weight: 300;
    text-transform: uppercase;

    margin-right: 1rem;
  }

  span:last-child {
    font-weight: bold;
  }
`;
