
import React from "react";
import styled from "styled-components";
import ArrowTextButton from '../comps/buttons/ArrowTextButton';

const image1 = "https://picsum.photos/800/600";

const Wrapper = styled.div`
display: flex;
justify-content: center;
background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo}; 
color: ${props => props.color ? props.color : "unset"};

`;

const StyledBlock = styled.div`
/* border: 1px solid #e24343; */

  display: flex;
  width: 80%;
  /* background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo};  */
  justify-content: center;
  /* color: black; */

  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-direction: column;
  }
`;


const StyledContent = styled.div`
/* border-bottom: 9px dotted black; */
/* border-bottom: 1px solid black; */
  display: flex;
  flex-basis: 30%;
  /* color: black; */
  align-items: center;
  padding: 20px 10px 20px 20px;
  justify-content: flex-start;
    :nth-child(2) {
      justify-content: flex-end;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  
    @media (max-width: ${props => props.mediaQueryBreakPoint}) {
      align-items: center;
    }
`;

const StyledHeaderText = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
  }
`;

const StyledContentText = styled.div`
  color: #363636;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
  }
`;

// const StyledButton = styled.button`
//   position: absolute;
//   left: 0;
//   background-color: #176fb8;
//   color: white;
//   margin: 3px 3px 1px 3px;
//   /* padding: 1px; */
//   box-shadow: 0px 0px 0px transparent;
//   border: 1px solid transparent;
//   text-shadow: 0px 0px 0px transparent;
//   border-radius: 2px;
//   cursor: pointer;
//   :hover {
//     box-shadow: 0px 0px 0px transparent;
//     border: 1px solid transparent;
//     text-shadow: 0px 0px 0px transparent;
//     background-color: #03A9F4;
//   }
//   :active {
//     outline: 0;
//     border: 1px solid black;
//   }
//   :focus {
//     outline: 0;
// }
// `;

// const ImageContainer = styled.div`
// border-top: 25px solid #ebd5ad;
// border-left: 45px solid #FFE7BC;
// border-bottom: 45px solid white;
// margin-right: 7rem;
// margin-left: 7rem;
// background-image: url('/image7.png');

// display: flex;
// justify-content: center;
// align-items: center;;
// background-repeat: no-repeat;
// background-size: cover;
// background-position: center;
// ` 

// const StyledImageBlock = styled.div`
//   display: flex;
//   width: 100%;
//   background-image: url(${image1});
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 100%;
//   justify-self: end;
//   @media (max-width: ${props => props.mediaQueryBreakPoint}) {
//   }
// `;

const HeaderTextAndUnderLine = styled.h1 `
line-height: 0.85;
  /* font-size: 3rem; */
  /* position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 0rem;
    right: -0.5rem;
    height: 0.2rem;
    width:75%;
    z-index: 1;
background-color: black;
    background-size: 12px; */
/* } */
`

const HeaderText = ({color, headerText, buttonText, height, mediaQueryBreakPoint, backgOne, backgTwo, backgAlt }) => {

  return(
    <div>
      <Wrapper color={color} backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
      <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} >

        <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <HeaderTextAndUnderLine>{headerText}</HeaderTextAndUnderLine> 
        </StyledContent>
        <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
          <StyledTextBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
            
          <ArrowTextButton textContent={buttonText} />
          </StyledTextBlock>
        </StyledContent>

    </StyledBlock>
    </Wrapper>
    </div>
  );
};

export default HeaderText;