import React from 'react'
import styled from 'styled-components';


const ClickContent = styled.div`
  transition: all .1s ease-in-out;
  font-size: 0.7rem;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin: 0 80px 0 10px;
  padding-bottom: 5px;
    :hover {
      /* color: #AA6E00; */
      filter: drop-shadow(0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.2));
      transform: scale(1.03);
    }
`
const ArrowDown = styled.div `
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #FDA300;
    ${ClickContent}:hover & {
      border-top: 15px solid #FFBE47;
    }
`

function AnchorButton({text, border, color, width, height, radius, margin, fontweight, fontsize, textcolor, boxshadow}) {
  return (
    <ClickContent >
      {text}
      <ArrowDown />
    </ClickContent>
  )
}

export default AnchorButton