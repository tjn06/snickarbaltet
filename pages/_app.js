import Layout from '../comps/Layout'
import "./_app.css";
import '../styles/globals.css'
import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: black;
    --color-brown-selected: #AC8B67;
    --color-green: #AFB880;
    --color-backgorange: #FFF7E9;
    --color-textlight: #FFF7E9;
    --color-buttonorange: #FDA300;
    
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles />
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
