import Image from 'next/image'

import React from 'react';
import styled from 'styled-components';
// import left from './left'; // Svg Icon
// import right from './right';  // Svg Icon
const Button = styled.img`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  font-size: 15px;
  transform: translateY(-50%);
  left: ${props => props.side === 'prev' && 5}px;
  right: ${props => props.side === 'next' && 5}px;
`;
function Buttons({ handleClickPrev, handleClicknext }) {
  return (
    <>
      {/* <Button side="prev" onClick={handleClickPrev} />
      <Button side="next" onClick={handleClicknext} /> */}
      <Button src="./left.svg" side="prev" onClick={handleClickPrev} />
      <Button src="./right.svg" side="next" onClick={handleClicknext} />
    </>
  );
}
export default Buttons;