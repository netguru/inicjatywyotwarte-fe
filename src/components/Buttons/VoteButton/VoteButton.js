import React from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import styled from 'styled-components'

const StyledButtonVotesCounter = styled.span`
  font-weight: 300;
  height: 14px; /* hack - to make this font look better with */
  color: inherit;
  padding-left: 0.5rem;
`

const UpvoteButton = styled.button`
  color: ${props => props.theme.fontColorDark};
  font-size: 0.85rem;
  font-weight: 500;
  height: 40px;
  width: 100%;
  border-radius: ${props => props.theme.borderRadiusBig};
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid;
  border-color: ${props =>
    props.alreadyUpvoted
      ? props.theme.addInitiativeButtonBorderColor
      : props.theme.resourceTileLayoutColor
  };
  transition: ${props => props.theme.buttonTransition};

  &:hover {
    color: ${props => props.theme.lightBackgroundColor};
    background-color: ${props => props.theme.addInitiativeButtonBorderColor};
    border-color: ${props => props.theme.addInitiativeButtonBorderColor};

    > * {
      color: ${props => props.theme.lightBackgroundColor};
    }
  }
`
UpvoteButton.displayName = 'UpvoteButton';

export default function VoteButton ({
  votesCount,
  handleVote,
  alreadyUpvoted
}) {
  const buttonContent = alreadyUpvoted ? 'Pomogło' : 'Pomocne'

  return (
    <>
      <UpvoteButton
        onClick={handleVote}
        aria-label='głosuj'
        alreadyUpvoted={alreadyUpvoted}
      >
        <ArrowDropUpIcon />
        {buttonContent}&nbsp;
        <StyledButtonVotesCounter>({votesCount})</StyledButtonVotesCounter>
      </UpvoteButton>
    </>
  )
}
