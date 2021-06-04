
import React from "react";
import styled from "styled-components";
import HeaderText from './HeaderText'
import Form from '../comps/MailUs/Form'

const image1 = "https://picsum.photos/800/600";

const PaddingTopEnd = styled.div`
padding-top: 3rem;
padding-bottom: 5rem;
background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo}; 
`

const Wrapper = styled.div `
display: flex;
justify-content: center;
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
  justify-content: flex-start;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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

const Contact = ({height, mediaQueryBreakPoint, backgOne, backgTwo, backgAlt }) => {

  return(
    <PaddingTopEnd backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
    < HeaderText height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} 
    color={'white'} headerText={'MAILA OSS'} buttonText={'KONTAKT'}/>
    <Wrapper backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
     
    <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} >

        <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
        <img width="180px" height="180px" src={'https://freesvg.org/img/Mail-Icon-White-on-Grey.png'}></img>
        </StyledContent>
        <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>



            <Form />


        </StyledContent>

    </StyledBlock>
    </Wrapper>
    </PaddingTopEnd>
  );
};

export default Contact;