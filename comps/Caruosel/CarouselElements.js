// import styled from "https://cdn.skypack.dev/styled-components@5.2.1";
// import * as React from "https://cdn.skypack.dev/react@17.0.1";
// import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

import React from 'react';

import styled from 'styled-components'

const H1 = styled.h1`
  text-align: center;
  margin: 0;
  /* padding-bottom: 10rem; */
`

const Relative = styled.div`
  position: relative;
`

const Flex = styled.div`
  display: flex;
`

const HorizontalCenter = styled(Flex)`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  width: 100vw;
`

const Container = styled.div`
  height: stretch;
  width: 100vw;
  /* background-color: #FFF7E9; */
  background: white;
  
  /* background: #FFF7E9; */
`

const Item = styled.div`
  color: black;
  font-size: 1rem;
  text-transform: capitalize;

  width: ${({width}) => `${width}rem`};
  height: ${({height}) => `${height}rem`};

  display: flex;

  align-items: flex-start;
  justify-content: center;
`

function getPrevElement(list) {
  const sibling = list[0].previousElementSibling
  
  if (sibling instanceof HTMLElement) {
    return sibling
  }

  return sibling
}

function getNextElement(list) {
  const sibling = list[list.length - 1].nextElementSibling

  if (sibling instanceof HTMLElement) {
    return sibling
  }

  return null
}

function usePosition(ref) {
  const [prevElement, setPrevElement] = React.useState(null)
  const [nextElement, setNextElement] = React.useState(null)

  React.useEffect(() => {
    const element = ref.current

    const update = () => {
      const rect = element.getBoundingClientRect()
     
      const visibleElements = Array.from(element.children).filter((child) => {
        const childRect = child.getBoundingClientRect()
        

        return childRect.left >= rect.left && childRect.right <= rect.right
      })

      if (visibleElements.length > 0) {
        setPrevElement(getPrevElement(visibleElements))
        setNextElement(getNextElement(visibleElements))
      }
    }

    update()

    element.addEventListener('scroll', update, {passive: true})

    return () => {
      element.removeEventListener('scroll', update, {passive: true})
    }
  }, [ref])

  const scrollToElement = React.useCallback(
    (element) => {
      const currentNode = ref.current

      if (!currentNode || !element) return

      let newScrollPosition

      newScrollPosition =
        element.offsetLeft +
        element.getBoundingClientRect().width / 2 -
        currentNode.getBoundingClientRect().width / 2

      currentNode.scroll({
        left: newScrollPosition,
        behavior: 'smooth',
      })
    },
    [ref],
  )

  const scrollRight = React.useCallback(() => scrollToElement(nextElement), [
    scrollToElement,
    nextElement,
  ])

  const scrollLeft = React.useCallback(() => scrollToElement(prevElement), [
    scrollToElement,
    prevElement,
  ])

  return {
    hasItemsOnLeft: prevElement !== null,
    hasItemsOnRight: nextElement !== null,
    scrollRight,
    scrollLeft,
  }
}

const CarouserContainer = styled(Relative)`
  overflow: hidden;
`

 const CarouselItem = styled.div`
  flex: 0 0 auto;
  margin-left: 1rem;
`

 const CarouselButton = styled.button`
  position: absolute;
  display: flex;
  cursor: pointer;

  top: 27%;
  z-index: 1;

  transition: transform 0.1s ease-in-out;

  background: RGBA(255,255,255,0.75);
  border-radius: 20px;
  border: none;
  padding: 0.3rem;

  &:hover {background: RGBA(255,255,255,1);
  }
`
 const LeftCarouselButton = styled(CarouselButton)`
  left: 12px;
  transform: translate(-110%, -50%);

  ${CarouserContainer}:hover & {
    transform: translate(0%, -50%);
  }

  visibility: ${({hasItemsOnLeft}) => (hasItemsOnLeft ? `all` : `hidden`)};
`

 const RightCarouselButton = styled(CarouselButton)`
  right: 12px;
  transform: translate(110%, -50%);

  ${CarouserContainer}:hover & {
    transform: translate(0%, -50%);
  }
  /* opacity: ${({hasItemsOnRight}) => (hasItemsOnRight ? `1` : `0.5`)}; */
  visibility: ${({hasItemsOnRight}) => (hasItemsOnRight ? `all` : `hidden`)};
`

 const CarouserContainerInner = styled(Flex)`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  // offset for children spacing
  margin-left: -1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  ${CarouselItem} & {
    scroll-snap-align: center;
  }
`

const ArrowLeft = ({size = 30, color = '#000000'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H6M12 5l-7 7 7 7" />
  </svg>
)


const ArrowRight = ({size = 30, color = '#000000'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
)


function Carousel({children}) {
  const ref = React.useRef()

  const {
    hasItemsOnLeft,
    hasItemsOnRight,
    scrollRight,
    scrollLeft,
  } = usePosition(ref)

  return (
    <CarouserContainer>
      <CarouserContainerInner ref={ref}>
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>{child}</CarouselItem>
        ))}
      </CarouserContainerInner>
      <LeftCarouselButton hasItemsOnLeft={hasItemsOnLeft} onClick={scrollLeft}>
        <ArrowLeft />
      </LeftCarouselButton>
      <RightCarouselButton
        hasItemsOnRight={hasItemsOnRight}
        onClick={scrollRight}
      >
        <ArrowRight />
      </RightCarouselButton>
    </CarouserContainer>
  )
}

const colors = [
  // '#f1c40f',
  // '#f39c12',
  // '#e74c3c',
  // '#16a085',
  // '#2980b9',
  // '#8e44ad',
  // '#2c3e50',
  // '#95a5a6',

    {src: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80', header: 'Tittle'} ,
    {src: 'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80', header: 'Tittle'},
    {src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80', header: 'Tittle'},
    {src: 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80', header: 'Tittle'},
    {src: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80', header: 'Tittle'},
    {src: 'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80', header: 'Tittle'},
    {src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80', header: 'Tittle'},
    {src: 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80', header: 'Tittle'},

]

const colorsArray = colors.map((color) => (
  <Item
    width={20}
    height={20}
    // style={{background: color, borderRadius: '20px', opacity: 0.9}}
    key={color.src}
  ><div>
    <img src={color.src} alt="dd" width="300px"></img>
    <h3>{color.header}</h3>
    <p>dsdsdssdsdd</p>
    </div>
    {/* {color} */}
  </Item>
))

function CarouselElements() {
  return (
    <Container>
      {/* <H1>SENASTE PROJEKT</H1> */}
      <HorizontalCenter>
        <Carousel>{colorsArray}</Carousel>
      </HorizontalCenter>
    </Container>
  )
}

export default CarouselElements