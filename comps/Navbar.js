// import Link from 'next/link'
import NavLink from './NavLink'
import Image from 'next/image'
import styled from 'styled-components'
import React, { useState } from 'react';
import PhoneIcon from '../comps/PhoneIcon';
import OpenHoursIcon from '../comps/OpenHoursIcon';
import HamburgerIconOpen from '../comps/HamburgerIconOpen'
import HamburgerIconClosed from '../comps/HamburgerIconClosed'
import Buttons from '../comps/buttons/Buttons'

import useDocumentScrollThrottled from '../comps/useDocumnetScrollThrottled';

// const NavStyle = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   a {
//     color: var(--color-text);
//     text-decoration: none;
//     font-family: 'Barlow Condensed', sans-serif;
//     font-size: 1.4rem;

//     &[aria-current] {
//       color: var(--color-brown-selected);
//     }
//   }
// `;
// const placementOrHeightValue = "0px";
// const placementOrTranslateY = "-20px";
const translateYHeader = "-142"





const mediaQ = "686px"; // To all mediaquerys in styled components in this component
const mediaQNumber = 686; // To function closeMobileMenuRouteClick number without px is required

const NavStyle = styled.header`
box-sizing: border-box;
transition: all 0.1s ease;
  /* font-family: 'Josefin Sans', sans-serif; */
  position: fixed;
  /* top: ${placementOrHeightValue}; */
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  justify-content: center;
  width: 100%;
  padding: 0px 80px 0 80px;
  height: 100px;
  
  background-color: white;
  /* background-color: #FFE7BC; */
  color: #353535;;
  transform: translateY(0);
  transition: transform 0.3s ease;
  /* background-image: linear-gradient(to right,#FFF8F0, #FFF8F0, #DFE0DF); */
  font-size: 0.8em;
  /* border-bottom: 1px solid rgb(255, 255, 255); */
  z-index: 10; 
  /* box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.13); */

  a {
    color: var(--color-text);
    text-decoration: none;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.4rem;

    &[aria-current] {
      color: var(--color-brown-selected);
    }
  }
  
  &.shadow {
  /* box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13); */
  box-shadow: 0 15px 15px -9px rgba(0, 0, 0, 0.02);
  }
  /* &.hidden-info-header {
  transform: translateY(${placementOrTranslateY});
  }   */
  &.hidden {
  transform: translateY(${translateYHeader}%);
  }
  &.transparent {
  opacity: 1;
  }

  @media (max-width: 1024px) {
    transition: all 0.1s ease;

    padding: 0px 10px;

    /* transform: translateY(${placementOrTranslateY}); */

    /* &.shadow {
    box-shadow: none;
  } */
  }

  @media (max-width: ${mediaQ}) {
    transition: all 0.1s ease;
    height: 50px;
    padding: 0px 10px;
    top: 0;
    /* transform: translateY(${placementOrTranslateY}); */

    /* &.shadow {
    box-shadow: none;
  } */
  }
`;

const StyledMaxWidthContent = styled.nav`
  display: flex;
  /* flex-basis: 1100px; */
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  /* padding: 0px 25px; */
  /* background-color: grey; */
  @media (max-width: ${mediaQ}) {
    justify-content: space-between;
    /* cursor: pointer; */

  }
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledNavOptions = styled.ul`
  padding-left: 25px;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  list-style-type: none;
  
  @media (max-width: ${mediaQ}) {
    
    display: flex;
    width: 100%;
    height: calc(100vh);
    /* height: 350px; */
    position: absolute;
    top: 37px;
    left: 100%;
    opacity: 0;
    transition: all 0.2s ease;
    flex-direction: column;
    list-style-type: none;
    grid-gap: 0px;

    &.active {
      background: #ffffff;
      left: 0;
      opacity: 1;
      transition: all 0.2s ease;
      z-index: 1;
      align-content: center;
      padding-left: 0px;
    }
  }
  `;

const StyledListNavItem = styled.li`
&.show-hide-when-mobile {
  display: none;
}
@media (max-width: ${mediaQ}) {
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 10vw; */
  padding: 30px 0px;

  &.show-hide-when-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vw;
  padding: 30px 0px;
  }
}
`;

const HamburgerIconsShowHide = styled.span`
  display: none;

  @media (max-width: ${mediaQ}) {
    display: flex;
    cursor: pointer;
  }
`;

const StyledIconsMobile = styled.div`
  display: none;
  /* padding-top: 2px; */
  margin-right: 10%;
  font-size: 0.8em;
  /* font-weight: bold; */

  @media (max-width: ${mediaQ}) {
    display: flex;
    /* cursor: pointer; */

  }
`;

const StyledBorderSidesFirst = styled.div`
display: flex;
padding: 4px;
border-width: 0px 1px 0px 1px;
border-color: #666666;
border-style: solid;
`;
const StyledBorderSidesSecond = styled.div`
display: flex;
padding: 4px;
border-width: 0px 1px 0px 0px;
border-color: #666666;
border-style: solid;
`;

const StyledOpenHoursIcon = styled(OpenHoursIcon)`
cursor: pointer;
`;

const StyledPhoneIcon = styled(PhoneIcon)`
cursor: pointer;
`;

const StyledLink = styled(NavLink)`
  color: #858585;
  text-decoration: none;

  &.active {
  transition: all 0.1s ease;
	font-weight: bold;
  /* color: #070707; */
  text-decoration: none;
  }
  :hover {
    color: #070707;
    transition: all 0.1s ease;
  } 
`;

  const Navbar = () => {
    const [hideHeader, setHideHeader] = useState(false);
    const [showHeaderOpenMenu, setShowHeaderOpenMenu] = useState(false);
    const [hideInfoHeader, setHideInfoHeader] = useState(false);
    const [showHeaderShadow, setshowHeaderShadow] = useState(false);
    const [tranparentHeader, setTranparentHeader] = useState(false);
  
  
    const [showHideOpenHours, setShowHideshowHideOpenHours] = useState(false);
  

  
    // Minimumscoll - Change header states if scrolling 80px up or down
    const MINIMUM_SCROLL = 80;
    // Timeoutdelay - Delay on changing header state
    const TIMEOUT_DELAY = 200;
  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
      // 
      const isFromTop = currentScrollTop > 300;
      // const isFromTopShrinkHeader = currentScrollTop > 800;
      
      setshowHeaderShadow(currentScrollTop > 2);
      setTranparentHeader(currentScrollTop > 2);
      setHideInfoHeader(currentScrollTop > 2);
  
      if (isFromTop) {
        setShowHideshowHideOpenHours(false)
      }
      
      setTimeout(() => {
        if(showHeaderOpenMenu) {
          setHideHeader(false) ;
        } else {
          setHideHeader(isScrolledDown && isMinimumScrolled && isFromTop) ;
        }
      }, TIMEOUT_DELAY);
    });

    const shadowStyle = showHeaderShadow ? 'shadow' : '';
    const hiddenStyle = hideHeader ? 'hidden' : '';
    // const hiddenInfoStyle = hideInfoHeader ? 'hidden-info-header' : '';
    const transparentStyle = tranparentHeader ? 'transparent' : '';

    const [toggleHamburgerAndMenu, setToggleHamburgerAndMenu] = useState(false);

    const toggleHamburgerClick = () => {
      setToggleHamburgerAndMenu(!toggleHamburgerAndMenu);
      setShowHeaderOpenMenu(!showHeaderOpenMenu)
    }

    const closeMobileMenuRouteClick = () => {
      setToggleHamburgerAndMenu(false)
    }

    return ( 
      <NavStyle className={`${shadowStyle} ${hiddenStyle} ${transparentStyle}`}>
        {/* <div className="logo">
          <Image src="/logo.png"  width={10} height={10}/>
        </div>
        <NavLink href="/"><a>Home</a></NavLink>
        <NavLink href="/about"><a>About</a></NavLink>
        <NavLink href="/findus"><a>Find us</a></NavLink>
        <NavLink href="/nested/"><a>See nested</a></NavLink> */}
        <StyledMaxWidthContent>
        <div className="logo">
          <Image src="/logo.png" width={90} height={90}/>
        </div>
        <StyledNav>

          <StyledNavOptions className={toggleHamburgerAndMenu ? "active" : ""}>
            <StyledListNavItem onClick={closeMobileMenuRouteClick}>
              <StyledLink href="/">
              <a>Home</a>
              </StyledLink> 
            </StyledListNavItem>
            <StyledListNavItem onClick={closeMobileMenuRouteClick}>
              <StyledLink href="/about">
              <a>About</a>
              </StyledLink>
            </StyledListNavItem>
            <StyledListNavItem onClick={closeMobileMenuRouteClick}>
              <StyledLink href="/findus">
              <a>Find us</a>
              </StyledLink>
            </StyledListNavItem>
            <StyledListNavItem onClick={closeMobileMenuRouteClick}>
              <StyledLink href="/nested/">
              <a>See nested</a>
              </StyledLink>
            </StyledListNavItem>
            <StyledListNavItem onClick={closeMobileMenuRouteClick}>
              <StyledLink href="/nested/">
              <a><Buttons  fontsize="1rem" fontweight="300" textcolor="black"
                width="150px" height="100%" margin="0px"
                color="var(--color-buttonorange)" radius="1px;"  /></a>
              </StyledLink>
            </StyledListNavItem>
          </StyledNavOptions>
        </StyledNav>

        <StyledIconsMobile>
          <StyledBorderSidesFirst >
            <StyledOpenHoursIcon onClick={() => setShowHideshowHideOpenHours(!showHideOpenHours)} width="20" height="20"/>
            {/* <StyledClose /> */}
            {showHideOpenHours  ? (
              <OpenHours closeOpenHoursChild={closeThisOpenHours} topPosition="51px" marginLeft="-93px" />
              ) : (
              null
            )}
          </StyledBorderSidesFirst>

          <a href="tel:+496170961709">
            <StyledBorderSidesSecond>
              <StyledPhoneIcon width="20" height="20"/>
            </StyledBorderSidesSecond>
          </a>
        </StyledIconsMobile>

        <HamburgerIconsShowHide onClick={toggleHamburgerClick}>
          {toggleHamburgerAndMenu ? (
            <HamburgerIconClosed
            width="18px" height="18px" />) : (
            <HamburgerIconOpen
            width="18px" height="18px" />
          )}
        </HamburgerIconsShowHide>

        </StyledMaxWidthContent>
      </NavStyle>     
      ); }

  export default Navbar;

