
import React from "react";
import styled from "styled-components";
import ArrowTextButton from '../comps/buttons/ArrowTextButton';

const image1 = "https://picsum.photos/800/600";

const Wrapper = styled.div`
display: flex;
justify-content: center;
/* background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo};  */
background-color: white;
color: ${props => props.color ? props.color : "unset"};
padding-top: 1rem;
padding-bottom: 1rem;

`;




const StyledContent = styled.div`
  align-items: center;
  padding: 20px 10px 20px 20px;
  justify-content: center;

    @media (max-width: ${props => props.mediaQueryBreakPoint}) {

    }
`;


const HeaderTextAndUnderLine = styled.h1 `
/* line-height: 0.85; */
`

const HeaderText = ({color, headerText, buttonText, height, mediaQueryBreakPoint, backgOne, backgTwo, backgAlt }) => {

  return(

    <Wrapper color={color} backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
      {/* <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}> */}
        <h2>{headerText}</h2>
      {/* </StyledContent> */}
    </Wrapper>

  );
};

export default HeaderText;


















// import React from "react";
// import styled from "styled-components";

// const Wrapper = styled.div `
// display: flex;
// flex-direction: column;
// /* justify-content: center; */
// align-items: center;
// background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo}; 
// padding-top:2rem;
// /* background-color: ${props => props.backgAlt ?  props.backgOne : props.backgTwo};  */
// `

// const StyledBlock = styled.div`
// /* border: 1px solid #e24343; */
//   display: flex;
//   width: 100%;
  
//   justify-content: center;
//   color: black;

//   @media (max-width: ${props => props.mediaQueryBreakPoint}) {
//     flex-direction: column;
//     width: 100%;
//   }
// `;

// const StyledContent = styled.div`

//   display: flex;
//   flex-basis: 50%;
//   color: black;
//   align-items: center;
//   justify-content: center;
  
//   /* padding: 20px 10px 20px 20px; */
//     :nth-child(1) {
//       /* background-image: url('https://images.unsplash.com/photo-1616179283726-e96f7aa16a56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80');
//       background-repeat: no-repeat;
//       background-size: cover; */
//       /* margin: 0px 10px 0px 20px; */
//       /* height: 25rem; */
//     }

//     :nth-child(2) {
//       background-color: white;
//       justify-content: flex-start;
//       align-items: flex-start;
//       /* padding: 20px 20px 20px 10px;  */
      
//       flex-basis: 50%;
//     }
//     @media (max-width: ${props => props.mediaQueryBreakPoint}) {
//       flex-basis: unset;
//       padding: 5px;
//       justify-content: center;
//       text-align: center;
//       :nth-child(2) {
//         /* padding: 5px; */
//       }
//     }
// `;


// const StyledTextBlock = styled.div`
//   height: 100%;
//   color: white;
//   width: 100%;
//   font-size: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//     @media (max-width: ${props => props.mediaQueryBreakPoint}) {
//       align-items: center;
//     }
// `;

// const StyledHeaderText = styled.div`
//   font-weight: bold;
//   padding-bottom: 10px;
//   @media (max-width: ${props => props.mediaQueryBreakPoint}) {
//   }
// `;

// const StyledContentText = styled.div`
//   /* color: #363636; */
//   @media (max-width: ${props => props.mediaQueryBreakPoint}) {
//   }
// `;

// const HeaderText = ({color, headerText, buttonText, height, mediaQueryBreakPoint, backgOne, backgTwo, backgAlt }) => {

//   return(

//     <Wrapper color={color} backgAlt={backgAlt} backgOne={backgOne} backgTwo={backgTwo}>
//       <StyledBlock>
//         <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
//         <h2>{headerText}</h2>
//         </StyledContent>
//         <StyledContent height={height} mediaQueryBreakPoint={mediaQueryBreakPoint}>
//           SE ALLA PROJEKT
//         </StyledContent>
//       </StyledBlock>
//     </Wrapper>

//   );
// };

// export default HeaderText;