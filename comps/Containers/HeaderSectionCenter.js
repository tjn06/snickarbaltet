import styled from 'styled-components'
import ArrowTextButton from '../buttons/ArrowTextButton';

const Section = styled.section ` 
background-color: ${props => props.background};
display: flex;
justify-content: space-between;
/* background-color: #FFF6E7; */
position: relative;
/* border-bottom-left-radius: 300px 300px; */

/* align-items: center; */
align-items: center;
  /* padding-top: 5rem;
  padding-bottom: 5rem;
  padding-right: 7rem;
  padding-left: 17rem; */
`
const CenterText = styled.section ` 
background-color: ${props => props.background};
display: flex;
justify-content: space-between;
/* background-color: #FFF6E7; */
position: relative;
width: 60%;
left: 50%;
transform: translateX(-50%);
/* align-items: center; */
align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;

`

const HeaderTextAndUnderLine = styled.h3 `
  /* font-size: 3rem; */
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 0rem;
    right: -0.5rem;
    height: 0.75rem;
    z-index: -1;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg');
    background-repeat: no-repeat;
    background-size: 54%;
}`

const HeaderSectionCenter = ({background, arrowText, headerText,}) => {
  return (
    <Section background={background}>
      <CenterText>
        <HeaderTextAndUnderLine>{headerText}</HeaderTextAndUnderLine> 
        <ArrowTextButton textContent={arrowText} />
      </CenterText>
    </Section>
  )
}

export default HeaderSectionCenter