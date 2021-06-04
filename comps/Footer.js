import styled from 'styled-components';


const StyledFooter = styled.footer `
  /* display: none; */
  background: tranparent;
  height: 300px;

  @media (min-width: 648px) {
  /* display: flex;
  justify-content: space-evenly; */
  }
  @media (min-width: 800px) {
    /* flex-direction: column;
    justify-content: unset;
    margin-top: 0rem;
    margin-left: 0rem; */
  }
`

const Footer = () => {
  
  return ( 
    <StyledFooter>
      Copyright 2021
    </StyledFooter>
   );
}
 
export default Footer;