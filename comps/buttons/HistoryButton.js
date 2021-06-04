import React from 'react'
import styled from 'styled-components';


const ClickContent = styled.div`
  transition: all .1s ease-in-out;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
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
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid #FDA300;
  transition: all 0.5s ease;
  transform: ${props => props.showHide ? 'rotate(180deg)' : 'unset'};
    ${ClickContent}:hover & {
      border-top: 15px solid #FFBE47;
    }
`

const ArrowUp = styled.div `
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid #FDA300;
    ${ClickContent}:hover & {
      border-bottom: 15px solid #FFBE47;
    }
`

function HistoryButton({showHide, direction, text, border, color, width, height, radius, margin, fontweight, fontsize, textcolor, boxshadow}) {
  return (
    <ClickContent >
      { !direction && <ArrowUp /> }
      <p>{text}</p>
      { direction && <ArrowDown showHide={showHide}/> }
    </ClickContent>
  )
}

export default HistoryButton