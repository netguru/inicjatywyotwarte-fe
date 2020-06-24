import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyles = `
  display: block;
  text-decoration: none;
  text-align: center;
  color: inherit;
  border-radius: 50px;
  padding: 0.7rem 1rem;
  font-weight: 500;
  font-size: 0.8rem;
  margin: 2rem auto;
  border: 2px solid ${props => props.theme.modalColorVeryLight};
  width: 10rem;
  background: ${props => props.theme.lightBackgroundColor};
  transition: ${props => props.theme.buttonTransition};
  cursor: pointer;

  &:hover {
    box-shadow: ${props => props.theme.shadowButtonHover};
  }
`

const StyledLink = styled(Link)`
  ${ButtonStyles}
`

const StyledButton = styled.div`
  ${ButtonStyles}
`

const SummaryButton = ({ to = '', onClick, children, className }) => {
  if (!to && onClick) {
    return (
      <StyledButton className={className} onClick={onClick}>
        {children}
      </StyledButton>
    )
  }
  return (
    <StyledLink className={className} to={to}>
      {children}
    </StyledLink>
  )
}

export default SummaryButton
