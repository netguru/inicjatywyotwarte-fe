import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AddButton = styled(Link)`
  color: ${props => props.theme.fontColorDark};
  font-size: 0.85rem;
  padding: 0 1rem;
  background-color: ${props => props.theme.addInitiativeButtonBackgroundColor};
  border: 1px solid ${props => props.theme.addInitiativeButtonBorderColor};
  border-radius: ${props => props.theme.borderRadiusBig};
  cursor: pointer;
  height: 2.5rem;
  background-color: ${props => props.theme.lightBackgroundColor};
  transition: ${props => props.theme.buttonTransition};
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.fontColorDark};
    color: ${props => props.theme.lightBackgroundColor};
  }
`
AddButton.displayName = 'AddButton';

export default function NewButton () {
  return <AddButton to='/dodaj-inicjatywe'>+ Dodaj inicjatywę</AddButton>
}
