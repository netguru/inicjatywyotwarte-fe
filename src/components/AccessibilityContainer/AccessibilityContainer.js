import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ContrastIcon } from 'assets/contrast_icon.svg'

const StyledToggleContrastButton = styled.a`
  height: 2rem;
  width: 5rem;
  color: ${props => props.theme.fontColorDark};
  font-size: 0.85rem;
  padding: 0 1rem;
  cursor: pointer;
  height: 2.5rem;
  transition: ${props => props.theme.buttonTransition};
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 0.3rem;

  svg {
    height: 60%;
    width: 60%;
  }
`
StyledToggleContrastButton.displayName = 'StyledToggleContrastButton';

function AccessibilityContainer ({theme, toggleContrast}) {
  return (
    <>
      <StyledToggleContrastButton onClick={toggleContrast}><ContrastIcon/>&nbsp;Kontrast</StyledToggleContrastButton>
    </>
  )
}

export default AccessibilityContainer;
