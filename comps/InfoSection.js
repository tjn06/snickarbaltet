import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components';
import Image from 'next/image'
import HeaderSection from '../comps/Containers/HeaderSection'



const InfoWrapper = styled.div `
  /* display: grid; */
  /* text-align: center;
  justify-content: center;
  justify-items: center; */
  background-color: #fffaf2;
  padding-bottom: 5rem;
  
  /* padding: 1rem 1rem 3rem 1rem;
  margin: 8rem 0rem 3rem 0rem; */
  /* box-shadow: 3px 3px 10px #aaaaaa; */

  @media (min-width: 648px) {
    text-align: unset;
    justify-content: unset;
    justify-items: unset;
    /* padding: 1rem 1rem 3rem 1rem; */
  }

  @media (min-width: 800px) {
    text-align: unset;
    justify-content: unset;
    justify-items: unset;
    /* padding: 1rem 1rem 3rem 109px; */
  }
`
const ContentBoxes = styled.div`

display: grid;
grid-template-columns:0.5fr 1fr ;
/* grid-template-rows: 80vh; */

grid-gap: 1rem;` 


const ImageContainer = styled.div`
/* border-top: 25px solid #ebd5ad;
border-left: 45px solid #FFE7BC;
border-bottom: 45px solid white; */
/* margin-right: 7rem; */
/* margin-left: 7rem; */

/* background-image: url('/image7.png'); */
display: flex;
justify-content: center;
align-items: center;;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
` 
const TextContainer = styled.div`
/* padding-right: 17rem;
padding-left: 17rem; */
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-items: center;
/* background-color: white; */
padding-right: 7rem;
padding-left: 7rem;
/* box-shadow: 3px 3px 10px #F8F8F8;  */
` 
const Text = styled.p`
font-weight: ${props => props.bold ? props.bold : 'unset'};
font-size: 1.5rem;;
` 



const InfoSection = ({arrowText, headerText}) =>  {

  return (
        <InfoWrapper>
          {/* <HeaderSection arrowText={arrowText} headerText={headerText} 
          background={'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,250,242,1) 100%)'} solidBackGround={'rgb(255,255,255)'}/> */}
                    <HeaderSection arrowText={arrowText} headerText={headerText} 
          background={'white'} solidBackGround={'white'}/>
          <ContentBoxes>
            <ImageContainer><img width="180px" height="180px" src={'https://cdn.iconscout.com/icon/premium/png-512-thumb/carpentry-work-1-769352.png'}></img></ImageContainer>
            <TextContainer>
                {/* <h2>Våra uppdrag</h2> */}
                <Text bold={600}>Behöver du hjälp med snickeri idag eller 
                imorgon bara ring, vi hjälper dig. Behöver du hjälp med snickeri idag eller 
                imorgon bara ring, vi hjälper dig</Text>
                <Text>Behöver du hjälp med snickeri idag eller 
                imorgon bara ring, vi hjälper dig. Behöver du hjälp med snickeri idag eller 
                imorgon bara ring, vi hjälper dig. Behöver du hjälp med snickeri idag eller 
                imorgon bara ring, vi hjälper dig. Behöver du hjälp med snickeri idag eller 
                imorgon bara ring, vi hjälper dig</Text>
              </TextContainer>
          </ContentBoxes>
        </InfoWrapper>
  )
}

export default InfoSection