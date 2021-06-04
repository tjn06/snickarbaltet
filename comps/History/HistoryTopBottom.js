import styled from 'styled-components'
import HistoryButton from '../buttons/HistoryButton';

const Section = styled.section ` 
  background: ${props => props.background ? 'rgb(255,250,242)' : 'unset'};
  background: ${props => props.background ? 'linear-gradient(180deg, rgba(255,250,242,1) 0%, rgba(255,255,255,1) 100%)' : 'unset'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height ? props.height : "unset"};
`

const HistoryTopBottom = ({text, setShowHide, showHide, background, height, direction}) => {
  return (
    <Section height={height} background={background}>
      <span onClick={() => setShowHide(prev => !prev)}>
        <HistoryButton text={text} showHide={showHide} direction={direction}/>
      </span>
    </Section>
  )
}

export default HistoryTopBottom