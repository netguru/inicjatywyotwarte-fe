import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as NoResultsIllustration } from 'assets/no-results.svg'

const NoResultsContainer = styled.div`
  text-align: center;
  margin: 2em;
`

const HomeButton = styled(Link)`
  margin: 1.5rem auto 0;
  display: inline-block;
  line-height: 2.5rem;
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

  &:hover {
    background-color: ${props => props.theme.fontColorDark};
    color: ${props => props.theme.lightBackgroundColor};
  }
`

const Span = styled.span`
  display: block;
`
const Paragraph = styled.p`
  font-size: 1.8rem;
  margin: 1.5rem 0;
`

const StyledNoResultsIllustration = styled(NoResultsIllustration)`
  padding: 2rem 0;
`

export default function NoResults () {
  return (
    <NoResultsContainer>
      <StyledNoResultsIllustration />
      <Paragraph>
        Nie udało nam się znaleźć pasujących inicjatyw.
      </Paragraph>
      <Span>Zobacz wszystkie inicjatywy</ Span>
      <HomeButton to={'/'}>Przejdź do strony głównej</ HomeButton>
    </NoResultsContainer>
  )
}

