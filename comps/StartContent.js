import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from 'styled-components';
import Image from 'next/image'
import AnchorButton from './buttons/AnchorButton'
import ArrowTextButton from './buttons/ArrowTextButton'
import Projects from '../comps/Projects'
import InfoSection from '../comps/InfoSection'
import Carousel from '../comps/Caruosel/Carousel'
import HeaderSection from '../comps/Containers/HeaderSection'
import HistoryCollapseBlock from '../comps/History/HistoryCollapseBlock'
import MailUs from './MailUs/MailUs'
import MixedBlockOrderTextImgElement from '../comps/MixedBlockOrderTextImgElement'
import News from '../comps/News'
import Contact from '../comps/Contact'
import Mail from '../comps/Mail'

const mediaQ = "686px";


const Wrapper = styled.div `
background-color: white;
  /* background-color: #FFE7BC; */
  width: 100%;
  padding-top: 100px;
  /* border-bottom: 2px solid black; */
  @media (min-width: 600px) {
    padding-top: 100px;
  }
  @media (min-width: 800px) {
    padding-top: unset;
  }
  /* @media (min-height: 800px) {
  height: 100vh;
  } */
`

const GridContent = styled.div `
  display: grid;
  width: 100%;
  grid-template-rows: unset;
    @media (min-height: 500px) and (min-width: 1025px)  {
      grid-template-rows: [row1-start] 90vh [row2-middle] 10vh;
    }
    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: [column1-start] 100px [column-middle] auto;
      &.gridcontent > :first-child {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &.gridcontent > :nth-child(2) {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
      }
    @media (min-width: 1024px) {
      width: 100%;
      display: grid;
      grid-template-columns: [row1-start] 120px [row2-middle] auto ;
      &.gridcontent > :first-child {
        grid-column-start: unset;
        grid-column-end: unset;
        grid-row-start:unset;
        grid-row-end: unset;
      }
      &.gridcontent > :nth-child(2) {
        grid-column-start: unset;
        grid-column-end: unset;
        grid-row-start: unset;
        grid-row-end: unset;
      }
    }
}
`

const SocialIcons = styled.div `
  display: none;
  transition: all .1s ease-in-out;
    @media (min-width: 648px) {
      display: flex;
      justify-content: space-around;
      margin-left: 0px;
      align-items: flex-start;
    }
    @media (min-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 0.7rem;
    }

    @media (min-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      margin-left: 0.2rem;
    }
`;
const ImgShadowFilter = styled.img `
filter: drop-shadow(0.25rem 0.25rem 0.4rem rgba(0, 0, 0, 0.5));
transition: all .1s ease-in-out;
cursor: pointer;
  :first-child {
    padding: 15px 0;
  }
  :nth-child(2) {
    padding:15px 0;
  }
  :nth-child(3) {
    padding: 15px 0;
  }
  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0.25rem 0.25rem 0.4rem rgba(0, 0, 0, 0.6));
    color: green;
  }
`;
// const MiddleSection = styled.div `
//   margin: 0 0.5em 0 0.5em;
//   @media (min-width: 684px) {
//   }
// `

const HeaderAndHero = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
    @media (min-width: 648px) {
      display: flex;
      flex-direction: row;
      }
`;

const HeaderTextPosition = styled.div `
display: flex;
width: 50%;
align-items: center;
flex-direction: column;
  @media (min-width: 648px) {
    align-items: center;
  }

  @media (min-width: 800px) {
    align-items: center;
    padding-top: 100px;
  }
`;
const HeaderTextProps = styled.div `

display: flex;
align-items: center;
flex-direction: column;
line-height: 4rem;
  @media (min-width: 648px) {
      align-items: unset;
  }
  @media (min-width: 648px) {
    padding-top: 0px;
  }
`;
const StyledHeaderText = styled.h1 `
  
  animation: waiting 6s linear infinite;
  transform-origin: 50% 50%;
  animation-delay: ${props => props.animationDelay};
  color: ${props => props.color};
  padding-bottom: 0rem;
  font-size: 62px;;
  transition: all .1s ease-in-out;
  @media (min-width: 800px) {
    padding-bottom: 0rem;
    font-size: 74px;
  }
  @media (min-width: 1064px) {
    padding-bottom: 1rem;
    font-size: 92px;
  }
  @media (min-width: 1568px) {
    font-size: 130px;
    padding-bottom: 3rem;
  }
    @keyframes waiting {
      0% {
        transform: scale(1);
      }
      16.667% {
        transform: scale(1.04);
      }
      33.333% {
        transform: scale(1);
      }
      100% {
        transform: scale(1);
      }
    }
`;

// const HeadImageWrapper = styled.div `
//   display: grid;
//   background-color: green;
// `

const HeroImagePosition = styled.div `
  position: relative;
  padding-top: 10px;
  padding-bottom: 25px;
  display: grid;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-content: center;
    @media (min-width: 648px) {
      padding-top: 0px;
    }
    @media (min-width: 800px) {
      padding-top: 100px;
    }
    @media (min-width: 648px) {
      text-align: unset;
    }
`;
const HeroImage = styled.img` 
  height: 420px;
  transition: all .1s ease-in-out;
  padding-right: 0px;
  position: relative;

    @media (min-width: 1300px) {
      height: 500px;
      padding-right: 100px;
      padding-top: 4rem;
      margin-left: unset;
    }
    @media (min-width: 1768px) {
      height: 600px;
    }
`;

const BottomSection = styled.div `

    display: grid;
    text-align: center;
    justify-content: center;
    justify-items: center;
    left: unset;
    @media (min-width: 648px) {
      width: 100%;
      text-align: unset;
      justify-content: unset;
      justify-items: unset;
    }
    @media (min-width: 800px) {
      width: unset;
      left: -108px;
    }
`;

const ButtonDisplay = styled.div `
/* background-color: green; */
  transition: all .1s ease-in-out;
  display: flex;
  padding-left: 5px;
  @media (min-width: 1024px) {
    padding-left: 100px;
  }
`;
const StyledOfferText = styled.span `
  font-weight: 600;
  letter-spacing: unset;
    @media (min-width: 800px) {
      letter-spacing: 2px;
    }
`;


const StartContent = ({ fakedata }) => {
  console.log(fakedata)
  return (
    <>

      <Wrapper>
        <GridContent className="gridcontent">
          <SocialIcons>
            <ImgShadowFilter src="/Instagram.svg" width={22} height={22}/>
            <ImgShadowFilter src="/Phone.svg" width={22} height={22}/>
            <ImgShadowFilter src="/Facebook.svg" width={22} height={22}/>
          </SocialIcons>

          <HeaderAndHero>
            <HeaderTextPosition>
              <HeaderTextProps>
                <span>SNICKARBÄLTET</span>
                <StyledHeaderText animationDelay={'unset'} color={'#000000'}>PROFFSIGT</StyledHeaderText>
                <StyledHeaderText animationDelay={'2s'} color={'#000000'}>PERSONLIGT</StyledHeaderText>
                <StyledHeaderText animationDelay={'4s'} color={'#000000'}>ERFARNEHET</StyledHeaderText>
                {/* <StyledHeaderText animationDelay={'2s'} color={'#503102'}>PERSONLIGT</StyledHeaderText>
                <StyledHeaderText animationDelay={'4s'} color={'#000000'}>ERFARNEHET</StyledHeaderText> */}
                <StyledOfferText>Snickeri, takläggning, balkong, projekt</StyledOfferText>
              </HeaderTextProps>
            </HeaderTextPosition>
            <HeroImagePosition>
              <HeroImage src="/heroimg.svg"  width={450}/>
              {/* <ArrowTextButton textContent={'SPANA IN HELA TEAMET'}paddingLeft={'1.8rem'}/> */}
            </HeroImagePosition>
          </HeaderAndHero>

          <BottomSection>
            <ButtonDisplay>
                <AnchorButton  text="SENASTE PRJOJEKT" fontsize="1rem" fontweight="300" textcolor="black"
                width="13rem" height="2.5rem" margin="0px"
                color="var(--color-buttonorange)" radius="1px;" boxshadow="3px 3px 10px #aaaaaa;" />
                <AnchorButton  text="MAILA OSS" />
                <AnchorButton  text="NYHETER" />
            </ButtonDisplay>
          </BottomSection>
      </GridContent>
    </Wrapper>
    
    <MixedBlockOrderTextImgElement height="250px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'white'} backgAlt={'lime'}/>
    <HistoryCollapseBlock />
    <News mediaQueryBreakPoint={mediaQ}/>
    <Carousel height="250px" mediaQueryBreakPoint={mediaQ} backgOne={'white'} backgTwo={'white'} backgAlt={'lime'}/>
    
  
    
   
    {/* <HeaderSection headerText={'SENASTE PROJEKT'} arrowText={'SE ALLA PROJEKT'} /> */}
    
    
    {/* <HistoryCollapseBlock /> */}
    {/* <Contact height="250px" mediaQueryBreakPoint={mediaQ} backgOne={'black'} backgTwo={'black'} backgAlt={'lime'}/> */}
    <Mail/>



    {/* <CarouselElements />

    <InfoSection headerText={'VAD GÖR VI'}arrowText={'OM OSS'} ></InfoSection>
    
    <MailUs /> */}


    </>
  );
}

export default StartContent;

// background={'linear-gradient(180deg, rgba(255,231,188,1) 0%, rgba(255,255,255,1) 100%)'} 
// solidBackGround={'rgb(255,231,188)'}