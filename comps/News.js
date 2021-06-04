
import React from "react";
import styled from "styled-components";


const Wrapper = styled.div `
display: flex;
flex-direction: column;
align-items: center;
background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo}; 
`

const StyledBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: black;
  flex-direction: row-reverse;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    flex-direction: column;
    /* flex-direction: column-reverse; */
    width: 100%;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-basis: 50%;
  color: black;
  align-items: center;
  justify-content: center;
  
  /* padding: 20px 10px 20px 20px; */
    :nth-child(1) {
      background-image: url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
      background-repeat: no-repeat;
      background-size: cover;
      padding: 0px 20px 0px 20px;
      height: 25rem;
    }

    :nth-child(2) {
      background-color: black;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0px 20px 0px 20px;
      
      flex-basis: 50%;
    }
    @media (max-width: ${props => props.mediaQueryBreakPoint}) {
      flex-basis: unset;
      padding: 5px;
      justify-content: center;
      text-align: center;
      :nth-child(2) {
        /* padding: 5px; */
      }
    }
`;

const StyledTextBlock = styled.div`
  height: 100%;
  color: white;
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    @media (max-width: ${props => props.mediaQueryBreakPoint}) {
      align-items: center;
    }
    @media (min-width: 1024px) {}
    /* align-items: center; */
`;

const StyledContentText = styled.div`
  max-width: 800px;
  display:grid;
  @media (max-width: ${props => props.mediaQueryBreakPoint}) {
    
  }
`;

const TxtBackg = styled.h2`
background-color: white;
opacity: 0.7;
padding: 7rem;
`;

const News = ({height, mediaQueryBreakPoint, backgOne, backgTwo, backgAlt }) => {

  return(

    <Wrapper backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
      <StyledBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint} >

        <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
          <TxtBackg>NYHETER</TxtBackg>
        </StyledContent>

        <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
          <StyledTextBlock height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
            {/* <StyledHeaderText>Vad gör vi? </StyledHeaderText> */}
            <StyledContentText>
            <p>Nyheter 2021 Jan</p>
            <p>Nyheter 2021 Jan</p>
            <p>Nyheter 2021 Jan</p>
            </StyledContentText>
          </StyledTextBlock>
        </StyledContent>

      </StyledBlock>
    </Wrapper>

  );
};

export default News;

