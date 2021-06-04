
import React from "react";
import styled from "styled-components";
import HeaderTextCenter from '../HeaderTextCenter'
import CarouselElements from '../Caruosel/CarouselElements'

const PaddingTopEnd = styled.div`
/* padding-top:3rem; */

padding-bottom: 0rem;
/* border-bottom: 3px solid silver; */
`
const Wrapper = styled.div `
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;;
background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo}; 

`

const StyledBlock = styled.div`
/* border: 1px solid #e24343; */
  display: flex;
  width: 80%;
  
  justify-content: center;
  color: black;

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-direction: column;
  }
`;

const StyledContent = styled.div`

  display: flex;
  flex-basis: 30%;
  color: black;
  align-items: center;
  padding: 20px 10px 20px 20px;
  justify-content: center;
    :nth-child(2) {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 20px 20px 20px 10px; 
      flex-basis: 70%;
    }
    @media (max-width: ${props => props.mediaQueryBreakPoint}) {
      flex-basis: unset;
      padding: 5px;
      justify-content: center;
      text-align: center;
      :nth-child(2) {
        padding: 5px;
      }
    }
`;

const StyledTextBlock = styled.div`
  height: 100%;
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
    @media (max-width: ${props => props.mediaQueryBreakPoint}) {
      align-items: center;
    }
`;


const MixedBlockOrderTextImgElement = ({height, mediaQueryBreakPoint, backgOne, backgTwo, backgAlt }) => {

  return(
    <PaddingTopEnd>
    < HeaderTextCenter headerText={'PROJEKT'} buttonText={'ALLA PROJEKT'}
    height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} 
    backgAlt={backgAlt} backgOne={backgOne} 
    backgTwo={backgTwo}/>
    <CarouselElements/>
    </PaddingTopEnd>
  );
};

export default MixedBlockOrderTextImgElement;