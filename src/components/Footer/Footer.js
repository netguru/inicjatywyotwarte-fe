import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainContainer = styled.div`
  border-top: 1px solid ${props => props.theme.modalColorVeryLight};
  height: ${props => props.theme.footerHeight};
  width: 100%;
  margin: ${props => props.theme.footerHeight} auto 0 auto;

  @media (max-width: 630px) {
    height: calc(2 * ${props => props.theme.footerHeight});
  }
`

const ContentWrapper = styled.div`
  width: ${props => props.theme.resourceTilesWidth};
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.fontColorUpvotesCount};
  font-size: 0.8rem;
  font-weight: 300;
  
  @media (max-width: 1000px) {
    width: ${props => props.theme.mobileResourceTilesWidth};
  }

  @media (max-width: 630px) {
    flex-direction: column;
  }
`

const RightContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`

const LeftContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const LinkWrapper = styled.div`
  margin-left: 50px;
  height: 100%;

  @media (max-width: 630px) {
    margin: 0 1.5rem;
  }
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  transition: ${props => props.theme.buttonTransition};
  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.linkHoverLightColor};
  }
`
const Footer = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <LeftContent>Inicjatywy Otwarte &copy; 2020</LeftContent>
        <RightContent>
          <LinkWrapper>
            <StyledLink to='/polityka-prywatnosci'>
              Polityka <br />
              prywatności
            </StyledLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledLink to='/regulamin-strony'>
              Regulamin <br />
              strony
            </StyledLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledLink to='/pomoc'>Pomoc</StyledLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledLink to='/o-nas'>O nas</StyledLink>
          </LinkWrapper>
        </RightContent>
      </ContentWrapper>
    </MainContainer>
  )
}

export default React.memo(Footer)
