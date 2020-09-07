import React, { useState } from 'react'
import styled from 'styled-components'
import SummaryButton from 'components/Buttons/SummaryButton/SummaryButton'

const Container = styled.div`
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

  ${props => !props.shouldShowPopUp && 'display: none;'}
`
Container.displayName = 'PopUpContainer';

const StyledSummaryButton = styled(SummaryButton)`
  margin-bottom: 0;
`

const PopUp = ({ content }) => {
  const [shouldShowPopUp, setShouldShowPopUp] = useState(true)

  const handlePopUpClose = () => {
    localStorage.setItem('areCookiesAccepted', 'true')
    setShouldShowPopUp(false)
  }

  return (
    <Container shouldShowPopUp={shouldShowPopUp}>
      {content}
      <StyledSummaryButton onClick={handlePopUpClose}>
        Akceptuję
      </StyledSummaryButton>
    </Container>
  )
}

export default PopUp
