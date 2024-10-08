import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  html, body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyles
