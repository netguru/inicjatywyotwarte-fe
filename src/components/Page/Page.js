import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'

import theme from '../../config/theme'
import contrastTheme from '../../config/contrastTheme'

const StyledMainContainer = styled.div`
  min-height: calc(100% - 2 * ${props => props.theme.footerHeight});

  @media (max-width: 630px) {
    min-height: calc(100% - 3 * ${props => props.theme.footerHeight});
  }
`
const GlobalStyle = createGlobalStyle`
  html, body {
    font-size: ${props => props.theme.mainFontSize};
    padding: 0;
    margin: 0;
    background: ${props => props.theme.mainBackgroundColor};
    height: 100%;
    min-width: ${props => props.theme.minSiteWidth};
    color: ${props => props.theme.fontColorDark};
  }

  button {
    background: ${props => props.theme.lightBackgroundColor};
    outline: none;
  }
`

export default function Page ({ children }) {
  const [isContrastOn, setIsContrastOn] = useState(false)

  const { pathname } = useLocation()

  const toggleContrast = () => {
    setIsContrastOn(!isContrastOn)
  }

  return (
    <MuiThemeProvider theme={isContrastOn ? contrastTheme : theme}>
      <ThemeProvider theme={isContrastOn ? contrastTheme : theme}>
        <GlobalStyle />
        <StyledMainContainer>
          <Header pathname={pathname} toggleContrast={toggleContrast} />
          {children}
        </StyledMainContainer>
        <Footer />
      </ThemeProvider>
    </MuiThemeProvider>
  )
}
