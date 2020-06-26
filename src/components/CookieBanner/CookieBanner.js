import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SummaryButton from 'components/Buttons/SummaryButton/SummaryButton'

const Banner = styled.div`
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 90%;
  padding: 25px;
  font-size: 0.9rem;
  background: ${props => props.theme.mainColorCategoryNeighbour};
  color: ${props => props.theme.fontColorMedium};
  z-index: 10;
  opacity: 0.97;
  text-align: justify;
  line-height: 1.4rem;
  border-radius: ${props => props.theme.borderRadiusMedium};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.blueActiveColor};
`

const StyledSummaryButton = styled(SummaryButton)`
  margin-bottom: 0;
`

const getInitialCookieAccepted = () => {
  return localStorage.getItem('areCookiesAccepted') || false;
}

const CookieBanner = () => {
  const [cookieAccepted, setCookieAccepted] = React.useState(getInitialCookieAccepted)

  const acceptCookie =() => {
    localStorage.setItem('areCookiesAccepted', 'true')
    setCookieAccepted(true);
  }

  return (
    !cookieAccepted && (
    <Banner>
      <>
        <span>
          Netguru SA korzysta z plików cookies w celu analizowania ruchu na
          stronie. Przez dalsze korzystanie z naszego Serwisu, bez zmian
          ustawień w zakresie prywatności, wyrażasz dobrowolną zgodę na
          zapisywanie plików cookies w Twojej przeglądarce. Więcej
          informacji na temat plików cookies znajdziesz w naszej&nbsp;
          {
            <StyledLink to='/polityka-prywatnosci'>
              “Polityce Prywatności"
            </StyledLink>
          }
          .
        </span>
        <StyledSummaryButton onClick={acceptCookie}>
          Akceptuję
        </StyledSummaryButton>
      </>
    </Banner>
  )
)}

export default CookieBanner
