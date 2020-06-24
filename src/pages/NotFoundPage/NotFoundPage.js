import React from 'react'
import { ReactComponent as Illustration } from 'assets/404.svg'
import SummaryButton from 'components/Buttons/SummaryButton/SummaryButton'
import styled from 'styled-components'

const StyledNotFoundContainer = styled.div`
  width: ${props => props.theme.resourceTilesWidth};
  margin: 4em auto;
  text-align: center;
  
  @media (max-width: 1000px) {
    width: ${props => props.theme.mobileResourceTilesWidth};
  }
`

const StyledIllustration = styled.div`
  width: 60%;
  margin: 0 auto;
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const StyledHeader = styled.h2`
  font-weight: 500;
  font-size: 1.6rem;
`

const StyledDescription = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.4rem;
  width: 40%;
  margin: 0 auto;
`

const NotFoundPage = props => {
  return (
    <>
      <StyledNotFoundContainer>
        <StyledIllustration>
          <Illustration />
        </StyledIllustration>
        <div className='not-found-container__text-content'>
          <StyledHeader>
            Strona poddana kwarantannie.
          </StyledHeader>
          <StyledDescription>
            Coś poszło nie tak, trafiłeś pod niewłaściwy adres.
          </StyledDescription>
          <SummaryButton to='/'>Przejdź do strony głównej</SummaryButton>
        </div>
      </StyledNotFoundContainer>
    </>
  )
}

export default NotFoundPage
