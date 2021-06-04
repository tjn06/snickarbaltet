import React, {useState} from 'react'
import styled from "styled-components";
import { Transition } from 'react-transition-group';
import HistoryTopBottom from './HistoryTopBottom'
import History from './History'
const StyledHistory = styled.div`
/* border-bottom: 1px solid black; */
`
const Animation = styled.div`
  box-sizing: border-box;
  transition:transform 0.4s ease, opacity 0.4s ease;
  overflow:hidden;
  transform-origin:top;
  transform: ${({ state }) => {
    switch (state) {
      case "entering":
        return 'scaleY(0)'
      case "entered":
        return 'scaleY(1)'
      case "exiting":
        return "scaleY(0)"
      case "exited":
        return "scaleY(0)"
    }
  }};
    opacity: ${({ state }) => {
    switch (state) {
      case "entering":
        return '0'
      case "entered":
        return '1'
      case "exiting":
        return "0"
      case "exited":
        return "0"
    }
  }};
`

export default function HistoryCollpaseBlock() {
  const [showHide, setShowHide] = useState(false);
  return (
    <StyledHistory >
      <HistoryTopBottom 
        text={'ÖPPNA VÅR HISTORIA'} 
        setShowHide={setShowHide}  
        showHide={showHide} 
        height={'100px'} 
        background={false}
        direction={true}/>

      <Transition
        in={showHide}
        timeout={300}
        appear
        unmountOnExit
      >
        {(state) => (
          <Animation state={state}>
            <History />
          </Animation>
        )}
      </Transition>
      { showHide && 
      <HistoryTopBottom 
        text={'STÄNG HISTORIA'} 
        setShowHide={setShowHide} 
        height={'100px'} 
        background={false}
        direction={false}/> } 
    </StyledHistory>
  )
}