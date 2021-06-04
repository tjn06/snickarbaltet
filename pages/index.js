import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from 'styled-components';
import Image from 'next/image'
import Buttons from '../comps/buttons/Buttons'
import Projects from '../comps/Projects'
import StartContent from '../comps/StartContent'
import CarouselElements from '../comps/Caruosel/CarouselElements'

import ArrowTextButton from '../comps/buttons/ArrowTextButton';
import HeaderSection from '../comps/Containers/HeaderSection'



const MobileFirst = styled.main `
  /* display: flex;
  align-content: center;
  justify-content: center; */
  /* border: 1px solid green; */
  /* width: 100%;
  padding: 0px; */
`

// const Content = styled.div `
//   /* border: 1px solid red; */
//   display: grid;
//   width: 100%;
//   /* height: 667px; */

//     @media (min-width: 800px) {
//       /* border: 1px solid red; */
//       display: grid;
//       grid-template-rows: [row1-start] auto [row2-middle] auto;
//       grid-template-columns: [column1-start] 100px [column-middle] auto [column-end] auto;

//       div:first-child {
//         grid-column-start: 1;
//         grid-column-end: 2;
//         grid-row-start: 1;
//         grid-row-end: 3;
//       }
//       div:nth-child(2) {
//         grid-column-start: 2;
//         grid-column-end: 4;
//         grid-row-start: 1;
//         grid-row-end: 2;
//       }
//       div:nth-child(3) {
//         grid-column-start: 1;
//         grid-column-end: 4;
//         grid-row-start: 2;
//         grid-row-end: 3;
//       }

//     @media (min-width: 1024px) {
//       width: 100%;
//       /* border: 1px solid red; */
//       display: grid;
//       grid-template-rows: unset;
//       grid-template-columns: [row1-start] 100px [row2-middle] auto [row3-end] 150px;

//       div:first-child {
//         grid-column-start: unset;
//         grid-column-end: unset;
//         grid-row-start:unset;
//         grid-row-end: unset;
//         /* background-color:unset; */
//       }
//       div:nth-child(2) {
//         grid-column-start: unset;
//         grid-column-end: unset;
//         grid-row-start: unset;
//         grid-row-end: unset;
//         /* background-color: unset; */
//       }
//       div:nth-child(3) {
//         grid-column-start: unset;
//         grid-column-end: unset;
//         grid-row-start: unset;
//         grid-row-end: unset;
//         /* background-color:unset; */
//       }
//     }

//   }
// `
// const ImgShadowFilter = styled.img `
// filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
//       :first-child {
//         padding: 15px 0;
//       }
//       :nth-child(2) {
//         padding:15px 0;
//       }
//       :nth-child(3) {
//         padding: 15px 0;
//       }
// `

// const FirstSection = styled.div `
//   display: none;

//   @media (min-width: 648px) {
//   display: flex;
//   justify-content: space-evenly;
//   }
//   @media (min-width: 800px) {
//     flex-direction: column;
//     justify-content: unset;
//     margin-top: 2em;
//   }
// `
// const MiddleSection = styled.div `
//   margin: 0 0.5em 0 0.5em;
//   @media (min-width: 684px) {
//     /* margin: unset; */
//   }
// `

// const MiddleSectionTop = styled.div `
// /* background-color: blue; */
// display: flex;
// align-items: center;
// flex-direction: column;


// @media (min-width: 648px) {
//   display: flex;
//   flex-direction: row;
//   align-items: unset;
//   }
// `
// const MiddleHeaderText = styled.div `
// /* background-color: blue; */
// display: flex;
// align-items: center;
// flex-direction: column;
// @media (min-width: 648px) {
//   align-items: unset;
//   }
// `
// const LineHeight = styled.div `
// /* background-color: blue; */
// margin-top: 1em;
// display: flex;
// align-items: center;
// flex-direction: column;
// line-height: 4rem;
// @media (min-width: 648px) {
//   align-items: unset;
//   }
// `

// const HeadImageWrapper = styled.div `
//   display: grid;
//   background-color: green;
// `

// const MiddleCenterImage = styled.div `
//   display: grid;
//   text-align: center;
//   width: 100%;
//   justify-content: center;
//   padding-left: 2em;
//   padding-top: 1em;
//   /* border: 1px solid black; */
//   @media (min-width: 648px) {
//     text-align: unset;
//   }
// `

const MiddleSecondSection = styled.div `
  display: grid;
  text-align: center;
  justify-content: center;
  justify-items: center;
  /* background-color: white; */
  padding: 1rem 1rem 3rem 1rem;
  margin: 8rem 0rem 3rem 0rem;
  /* box-shadow: 3px 3px 10px #aaaaaa; */

  @media (min-width: 648px) {
    text-align: unset;
    justify-content: unset;
    justify-items: unset;
    padding: 1rem 1rem 3rem 1rem;
  }

  @media (min-width: 800px) {
    text-align: unset;
    justify-content: unset;
    justify-items: unset;
    padding: 1rem 1rem 3rem 109px;
  }
`

const ButtonDisplay = styled.div `
  display: grid;
  grid-gap: 1em;

  @media (min-width: 648px) {
    display: flex;
  }
`

const ResponsiveDiv = styled.div `
  position: fixed;
  top:0;
  background-color: green;
  width: 70vw; 
  height: 100vh;
  /*works well for SVG's specifically*/
`

// const ImageCaption = styled.h3 `
//   font-size: 1.2rem;
//   font-weight: 500;
//   /* line-height: 0.0em; */
//   letter-spacing: 3px;
//   margin: 0px;
//   @media (min-width: 648px) {
//     padding-left: 1em;
//   }
// `
// const ImageCaptionBottom = styled.h3 `
//   font-size: 1rem;
//   font-weight: 400;
//   color: #AC8B67;
//   /* line-height: 0.0em; */
//   letter-spacing: 3px;
  
//   margin: 0px;
//   @media (min-width: 648px) {
//     padding-left: 1.2em;;
//   }
// `


// const HeaderSection = styled.section ` 
// display: flex;
// justify-content: space-between;
// align-items: center;
//   padding-top: 5rem;
//   padding-bottom: 3rem;
//   padding-right: 7rem;
//   padding-left: 7rem;
// `

const ImgShadowFilter = styled.img `
/* filter: drop-shadow(0.25rem 0.25rem 0.4rem rgba(0, 0, 0, 0.5)); */
transition: all .1s ease-in-out;
cursor: pointer;

  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0.25rem 0.25rem 0.4rem rgba(0, 0, 0, 0.6));
    color: green;
  }
`

export const getStaticProps = async () => {
  
  const res = await fetch("http://localhost:5000/test")
  const data = await res.json();


  return {
    props: {fakedata: data}
  }

}
export default function Home({fakedata}) {
  console.log(fakedata)
  return (
      <MobileFirst>
        
      <Head>
        <title>Snickarbältet | Hem</title>
        <meta name="keywords" content="snickeri" />
      </Head>
        <StartContent fakedata={fakedata}/>
        {/* <HeaderSection arrowText={'SE ALLA PROJEKT'} headerText={'SENASTE PROJEKT'}/> */}
        {/* <HeaderSection>
          <h1>SENASTE PROJEKT</h1> 
          <ArrowTextButton textContent={'SE ALLA PROJEKT'} paddingLeft={'1.8rem'} />
        </HeaderSection> */}
        {/* <CarouselElements /> */}
        
        {/* <MiddleSecondSection>
          <h3>VÅRA TJÄNSTER</h3>
          <h2>VI HJÄLPER DIG</h2>
          <p>Byggmax är en byggvarukedja som startades 1993 i Sverige och består av 100 varuhus i Sverige, 33 i Norge, 9 i Finland. Konceptet är att sälja ett begränsat sortiment byggmaterial, till ett lågt pris och utan kampanjer. Kunden kör själv in med sin bil, lastar vad som behövs och betalar vid utfarten</p>
          <ButtonDisplay>
            <Buttons  fontsize="1rem" fontweight="300" textcolor="black"
            width="13rem" height="2.5rem" margin="0px"
            color="var(--color-buttonorange)" radius="1px;" boxshadow="3px 3px 10px #aaaaaa;" />
            <Buttons  fontsize="1rem" fontweight="300" textcolor="black"
            width="13rem" height="2.5rem" margin="0px"
            color="--color-buttonorange" radius="1px;" boxshadow="3px 3px 10px #aaaaaa;" />
          </ButtonDisplay>
        </MiddleSecondSection> */}

        {/* <MiddleSecondSection>
          <h3>VÅRA TJÄNSTER</h3>
          <h2>VI HJÄLPER DIG</h2>
          <p>Byggmax är en byggvarukedja som startades 1993 i Sverige och består av 100 varuhus i Sverige, 33 i Norge, 9 i Finland. Konceptet är att sälja ett begränsat sortiment byggmaterial, till ett lågt pris och utan kampanjer. Kunden kör själv in med sin bil, lastar vad som behövs och betalar vid utfarten</p>
          <ButtonDisplay>
            <Buttons  fontsize="1rem" fontweight="300" textcolor="black"
            width="13rem" height="2.5rem" margin="0px"
            color="var(--color-buttonorange)" radius="1px;" boxshadow="3px 3px 10px #aaaaaa;" />
            <Buttons  fontsize="1rem" fontweight="300" textcolor="black"
            width="13rem" height="2.5rem" margin="0px"
            color="--color-buttonorange" radius="1px;" boxshadow="3px 3px 10px #aaaaaa;" />
          </ButtonDisplay>
        </MiddleSecondSection> */}
        
      </MobileFirst>
  )
}
