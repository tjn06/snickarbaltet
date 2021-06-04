import Head from 'next/head'
import styles from '../styles/Nested.module.css'
import Link from 'next/link'
import { useState } from 'react';
import styled from 'styled-components'
import Image from 'next/image'


const Content = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ( min-width: 648px) {
      align-items: unset;
    }
`

const PaddingHeader = styled.h3 `
  padding: 4rem 0 0 0;
  font-size: 48px;
  @media ( min-width: 648px) {
    padding: 4rem 0 0 10px;
  }
  @media ( min-width: 800px) {
    padding: 4rem 0 0 100px;
  }
  @media ( min-width: 1024px) {
    padding: unset;
    font-size: 19px;
  }
`

const ItemWrapper = styled(Link) `

`
const ItemWrapperDirection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

  @media (min-width: 648px) {
    flex-direction: row;
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`

const StyledImageProps = styled.img`
border: 3px solid black;
/* border-radius: 15px; */
  width: 100%;
  height: auto;
  /* align-self: center;
  object-fit: cover; */
  transition: opacity 0.25s ease-in-out;
  border-radius: 2px;
  /* box-shadow: 3px 3px 10px #aaaaaa; */
  cursor: zoom-in;
  @media (min-width: 648px) {
    width: 100%;
  }
`;

// const StyledImageProps = styled.img`

//   @media (min-width: 648px) {

//   }
// `;

const Anchor = styled.a `
  padding: 1em;
  text-align: center;
  /* padding: 2px 16px; */
  /* background: #fff; */
  /* display: block; */
  /* margin: 20px 10px; */
  /* border-left: 8px solid #fff; */
  @media (min-width: 648px) {
    text-align: unset;;
  }
  @media (min-width: 1024px) {
    padding: 0em 0em 1em 0;
  }
  &:hover {
    /* border-left: 8px solid #4979ff; */
  }
`



const Projects = ({ fakedata, showThreeItems }) => {
  const [limitedOrAll, setLimitedOrAll] = useState(false)

  const allProjects = fakedata.movies.map(fakeitem => (
    <ItemWrapper href={'/nested/' + fakeitem.id} key={fakeitem.id}>
    <Anchor>
      <h3>{ fakeitem.title } </h3>
    </Anchor>
  </ItemWrapper>
  ));
  

  const threeProjects = fakedata.movies.slice(0, 3).map(fakeitem => (
    <ItemWrapper href={'/nested/' + fakeitem.id} key={fakeitem.id}>
    <Anchor>
      <h3>{ fakeitem.title } </h3>
      <StyledImageProps src="/bil.jpg" alt="bil" width='400' height='auto'/>
    </Anchor>
  </ItemWrapper>
  ));

  if (showThreeItems) {
    return (  
    <Content>
      {/* <PaddingHeader>SENASTE PROJECT</PaddingHeader> */}
      <ItemWrapperDirection>
          {threeProjects}
      </ItemWrapperDirection>
    </Content>)
  }


  // console.log(fakedata.movies);
  return (
    <>
    <Head>
      <title>Snickarbältet | Nested</title>
      <meta name="keywords" content="nested" />
    </Head>
    <div>
        {allProjects}
    </div>
    </>
   );
}
 
export default Projects;