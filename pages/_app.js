import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import Th from '../components/Theme'
import Antd from '../components/Antd'
import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
  main: "mediumseagreen"
}

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>

        <Button>Normal</Button>

        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
        </ThemeProvider>

        <Th></Th>

        <Antd></Antd>
    </>
  )
}