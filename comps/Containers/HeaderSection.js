import styled from 'styled-components'
import ArrowTextButton from '../../comps/buttons/ArrowTextButton';

const Section = styled.section ` 
/* background-color: ${props => props.background}; */

background: ${props => props.solidBackground};
background: ${props => props.background};

/* background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,250,242,1) 100%); */
display: flex;
justify-content: space-between;
/* align-items: center; */
align-items: center;
  padding-top: 5rem;
  padding-bottom: 4rem;
  padding-right: 7rem;
  padding-left: 7rem;
`

const HeaderTextAndUnderLine = styled.h2 `
  /* font-size: 3rem; */
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 0rem;
    right: -0.5rem;
    height: 0.75rem;
    z-index: 1;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg');
    background-repeat: no-repeat;
    background-size: 54%;
}`

const HeaderSection = ({solidBackground, background, arrowText, headerText,}) => {
  return (
    <Section background={background} solidBackground={solidBackground}>
    <HeaderTextAndUnderLine>{headerText}</HeaderTextAndUnderLine> 
    <ArrowTextButton textContent={arrowText} />
    </Section>
  )
}

export default HeaderSection