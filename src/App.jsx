import React, { useState } from "react";
import {
  Card,
  CardWrapper,
  Container,
  CTop,
  CTopText,
  CTopTitle,
  Description,
  Logo,
  ShoeOne,
  Shoes,
  ShoeThree,
  ShoeTwo,
  Wrapper,
} from "./styles/Style";
import NikeLogo from "./assets/Nike.png";
import Shoe1 from "./assets/Nike6.png";
import Shoe2 from "./assets/Nike2.png";
import Shoe3 from "./assets/Nike5.png";
import CardBottom from "./components/CardBottom";
import { useMotionValue, useTransform } from "framer-motion";

function App() {
  const [currentColor, setCurrentColor] = useState(1);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  // Animação do Tênis

  const variants = {
    default: {
      translateX: 0,
      rotateZ: 0,
    },

    firstShoeAnimation: {
      translateX: -700,
      rotateZ: 45,
    },

    secondShoeAnimation: {
      translateX: -400,
      rotateZ: -45,
    },

    thirdShoeAnimation: {
      translateX: -400,
      rotateZ: -35,
    },
  };

  return (
    <Wrapper>
      <Container>
        <CardWrapper
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragConstraints={{ top: 10, right: 10, bottom: 10, left: 10 }}
          dragElastic={0.16}
          whileTap={{ cursor: "grabbing" }}
        >
          <Card>
            <CTop currentColor={currentColor}>
              <Logo src={NikeLogo} alt="logo" />
              <CTopText>
                <CTopTitle>React 55</CTopTitle>
                <Description>
                  The Nike React Element 55 SE is a balanced blend of classic
                  design and forword-looking innovation.
                </Description>
              </CTopText>
              <Shoes style={{ x, y, rotateX, rotateY, z: 10000 }}>
                <ShoeOne
                  src={Shoe1}
                  alt="shoe-1"
                  animate={
                    currentColor != 1
                      ? variants.firstShoeAnimation
                      : variants.default
                  }
                  variants={variants}
                />
                <ShoeTwo
                  src={Shoe2}
                  alt="shoe-3"
                  animate={
                    currentColor === 2
                      ? variants.secondShoeAnimation
                      : variants.default
                  }
                  variants={variants}
                />

                <ShoeThree
                  src={Shoe3}
                  alt="shoe-2"
                  animate={
                    currentColor === 3
                      ? variants.thirdShoeAnimation
                      : variants.default
                  }
                  variants={variants}
                />
              </Shoes>
            </CTop>

            <CardBottom
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
          </Card>
        </CardWrapper>
      </Container>
    </Wrapper>
  );
}

export default App;
