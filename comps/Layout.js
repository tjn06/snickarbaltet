import Navbar from "./Navbar"
import Footer from "./Footer"
import styled from 'styled-components'

const Center = styled.div `
  display: flex;
  justify-content: center;
  margin: 0px;
`

const StyledChildren = styled.div`
  
  /* width: 1100px;
  padding-top: 160px; */
  /* border: 1px solid black; */
  box-sizing: border-box;
`;

const Content = styled.div `
  /* border: 1px solid black; */
`

const Layout = ({ children }) => {
  return ( 
    <Content>
      <Navbar/>
        <Center>
          <StyledChildren>{ children }</StyledChildren>
        </Center>
      <Footer />
    </Content>
  );
}

export default Layout;