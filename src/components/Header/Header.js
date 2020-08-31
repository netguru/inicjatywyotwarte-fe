import React from 'react'
import { Link } from 'react-router-dom'
import NewButton from 'components/Buttons/NewButton/NewButton'
import { ReactComponent as Icon } from 'assets/io_logo.svg'
import MainHeaderAnimation from './MainHeaderAnimation'
import NeighbourHeaderAnimation from './NeighbourHeaderAnimation'
import BusinessesHeaderAnimation from './BusinessesHeaderAnimation'
import EducationHeaderAnimation from './EducationHeaderAnimation'
import HospitalHeaderAnimation from './HospitalHeaderAnimation'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles';
import AccessibilityContainer from '../AccessibilityContainer/AccessibilityContainer'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.iconBackground};
  height: 100%;
  width: 100%;
  padding: 5px;
  border-radius: ${props => props.theme.borderRadiusMedium};
`

const HeaderWrapper = styled.div`
  background: ${props => props.colorName};
  width: 100%;
  color: ${props => props.theme.fontColorDark};
`

const HeaderContent = styled.div`
  width: ${props => props.theme.headerContentWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  
  @media (max-width: 1000px) {
    width: ${props => props.theme.mobileHeaderContentWidth};
  }
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  z-index: 1;
`

const HeaderBottom = styled.div`
  height: 100%;
  text-align: left;
  z-index: 1;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 2.7rem;
  font-weight: 300;

  @media (max-width: 700px) {
    margin-top: 1rem;
  }
`

const SubTitle = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  margin: 0;
  color: ${props => props.theme.fontColorDark};
  opacity: 0.6;
  line-height: 1.4rem;
`

const IllustrationContainer = styled.div`
  margin: 0 auto;
  padding: 0 0 1.5rem 1.5rem;
  width: 100%;
  box-sizing: border-box;
  height: 300px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 700px) {
    margin: 0 auto;
    padding: 1.5rem;
  }
`

const IllustrationWrapper = styled.div`
  visibility: ${props => props.theme.visibleIllustration};
  height: 100%;
  max-width: 95%;
  margin: 0 0 0 auto;
  display: flex;

  @media (max-width: 700px) {
    margin: 0 auto;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 40px;

  svg {
    height: 80%;
    width: auto;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
`

const Header = ({ pathname, toggleContrast, toggleIncreaseFontSize }) => {
  const theme = useTheme();
  let animation = null
  let colorName = theme.mainColor
  let shouldDisplayTitle = true

  if (
    pathname === '/pomoc-sasiedzka' ||
    pathname === '/pomoc-sasiedzka/' ||
    pathname === '/pomoc-sasiedzka/zasoby' ||
    pathname.startsWith('/pomoc-sasiedzka/zasoby/')
  ) {
    animation = <NeighbourHeaderAnimation />
    colorName = theme.mainColorCategoryNeighbour
  } else if (
    pathname === '/lokalne-firmy' ||
    pathname === '/lokalne-firmy/' ||
    pathname === '/lokalne-firmy/zasoby' ||
    pathname.startsWith('/lokalne-firmy/zasoby/')
  ) {
    animation = <BusinessesHeaderAnimation />
    colorName = theme.mainColorCategoryBusinesses
  } else if (
    pathname === '/edukacja' ||
    pathname === '/edukacja/' ||
    pathname === '/edukacja/zasoby' ||
    pathname.startsWith('/edukacja/zasoby/')
  ) {
    animation = <EducationHeaderAnimation />
    colorName = theme.mainColorCategoryEducation
  } else if (
    pathname === '/dla-szpitali' ||
    pathname === '/dla-szpitali/' ||
    pathname === '/dla-szpitali/zasoby' ||
    pathname.startsWith('/dla-szpitali/zasoby/')
  ) {
    animation = <HospitalHeaderAnimation />
    colorName = theme.mainColorCategoryHospitals
  } else if (
    pathname === '/' ||
    pathname === '/zasoby' ||
    pathname === '/index.html' ||
    pathname.startsWith('/zasoby/')
  ) {
    animation = <MainHeaderAnimation />
  } else {
    shouldDisplayTitle = false
  }

  return (
    <HeaderWrapper colorName={colorName}>
      <HeaderContent>
        <HeaderTop>
          <StyledLink to='/'>
            <IconContainer>
              <Icon data-cy="header-logo-icon" />
            </IconContainer>
          </StyledLink>
          <ButtonsWrapper>
            <AccessibilityContainer toggleContrast={toggleContrast} toggleIncreaseFontSize={toggleIncreaseFontSize}/>
            <NewButton />
          </ButtonsWrapper>
        </HeaderTop>
        {shouldDisplayTitle && (
          <HeaderBottom>
            <DescriptionContainer>
              <Title>Pokonajmy wirusa razem</Title>
              <SubTitle>
                Największa aktualna baza inicjatyw społecznych dotyczących walki
                z COVID-19 w Polsce
              </SubTitle>
            </DescriptionContainer>
            <IllustrationContainer>
              <IllustrationWrapper>{animation}</IllustrationWrapper>
            </IllustrationContainer>
          </HeaderBottom>
        )}
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default React.memo(Header);
