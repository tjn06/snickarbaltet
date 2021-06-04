// Carousel.js
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Buttons from './SliderButtons';
const Wrapper = styled.div`
  position: relative;
  width: 55%;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;
const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  transition: transform 0.6s ease-in-out;
  transform: ${props => `translateX(${props.xPosition}px)`}; // (*)
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
function Carousel({
  images,
  setWidth,
  xPosition,
  handleClickPrev,
  handleClicknext,
}) {
  const slideRef = useRef();
useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);
return (
    <Wrapper>
      <Slide xPosition={xPosition} ref={slideRef}>
        {images.map((img, i) => (
          <img src={img} alt="test" key={i} />
        ))}
      </Slide>
      <Buttons
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </Wrapper>
  );
}
export default Carousel;