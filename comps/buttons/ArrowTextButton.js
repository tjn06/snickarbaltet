import React from 'react'
import styled from 'styled-components';

const ImageCaptionBottom = styled.h3 `
transition: all .1s ease-in-out;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  /* color: #AC8B67; */
  /* line-height: 0.0em; */
  letter-spacing: 4px;
  white-space: nowrap;
  display: flex;
  /* position: relative; */
  /* top:0px;
  left: 8%; */
  padding-left: ${props => props.paddingLeft ? '0rem' : '0rem'};
  margin: 0px;
  :hover {
    /* color: #AA6E00; */
    filter: drop-shadow(0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.2));
    transform: scale(1.03);
  }
  @media (min-width: 1300px) {
    /* padding-left: 4rem; */
    letter-spacing: 6px;
  }
  @media (min-width: 1768px) {
  /* font-weight: 600; */
    /* padding-left: 5rem; */
    letter-spacing: 9px;
}
`

const ArrowRight = styled.div `
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #FDA300;
  margin-right: 4px;
  ${ImageCaptionBottom}:hover & {
    border-left: 15px solid #FFBE47;
  }
`


function ArrowTextButton({textContent, paddingLeft, paddingTop, border, color, width, height, radius, margin, fontweight, fontsize, textcolor, boxshadow}) {
  return (
<ImageCaptionBottom paddingLeft={paddingLeft}> {textContent}</ImageCaptionBottom>
  )
}


export default ArrowTextButton