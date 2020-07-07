import React, { useState } from 'react'
import axios from 'axios'

import VoteButton from 'components/Buttons/VoteButton/VoteButton'
import PlatformButton from 'components/Buttons/PlatformButton/PlatformButton'
import RecourceMockedIcon from 'components/RecourceMockedIcon/RecourceMockedIcon'
import { ReactComponent as TagPin } from 'assets/tag_pin.svg'
import { ReactComponent as APin } from 'assets/tag_a.svg'
import styled from 'styled-components'
import { getStrippedHref } from 'shared'
import { endpoint } from 'constants/constants'
import { Link } from 'react-router-dom'
import { saveOrUpdateLocalVote, isAlreadyUpvoted } from 'utils/VoteManager'

const ResourceTileContainer = styled.div`
  background: ${props => props.theme.lightBackgroundColor};
  border-radius: ${props => props.theme.borderRadiusSmall};
  border: 1px solid ${props => props.theme.resourceTileLayoutColor};
  padding: 30px;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ResourceIcon = styled(Link)`
  min-width: 130px;
  max-width: 130px;
  margin-right: 30px;
  border-radius: ${props => props.theme.borderRadiusMedium};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: ${props => props.theme.borderRadiusMedium};
  }

  @media (max-width: 700px) {
    margin: 0 auto 20px auto;
  }
`

const DescriptionContainer = styled.div`
  flex-grow: 1;
  position: relative;
  min-width: 0;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.3rem;
  font-weight: 500;
`

const Description = styled.p`
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  font-weight: 300;
  flex-grow: 1;
  line-height: 1.4rem;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  p {
    margin: 0;
  }

  @media (max-width: 700px) {
    margin: 0 0 30px 0;
  }
`

const PinsContainer = styled.div`
  margin: 0;
  font-size: 0.85rem;
  min-height: 18px;
  bottom: 0;
  display: flex;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 42px;
    justify-content: space-between;
  }
`

const Location = styled.div.attrs({
  'aria-label': 'lokalizacja'
})`
  margin-right: 2em;
  display: flex;
  align-items: center;
  font-weight: 300;
  color: ${props => props.theme.fontColorMedium};
  max-width: calc(50% + 2em);
  line-height: 1rem;

  @media (max-width: 700px) {
    max-width: none;
  }
`

const PlatformButtonsContainer = styled.address`
  display: flex;
  justify-content: space-between;
  height: 42px;

  @media (max-width: 700px) {
    margin-right: 10px;
  }
`

const PlatformButtonContainer = styled.div`
  width: 42px;

  @media (max-width: 700px) {
    margin-right: 5px;
  }
`

const VoteButtonContainer = styled.div`
  @media (max-width: 700px) {
    width: 150px;
  }
`

const ResourceButtonsContainer = styled.div`
  min-width: 150px;
  margin: 8px 0px 8px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 114px;
  align-self: center;

  @media (max-width: 700px) {
    margin: 20px 0 0 0;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: auto;
    width: 100%;
  }
`

const PinIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`

const LocationTextContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ResourceUrlLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  display: flex;
  align-items: center;
  font-weight: 300;
  color: ${props => props.theme.fontColorMedium};
  text-decoration: none;
  max-width: calc(50% - 2em);
  transition: ${props => props.theme.buttonTransition};

  &:hover {
    color: ${props => props.theme.blueActiveColor};
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: ${props => props.theme.buttonTransition};

  &:hover {
    color: ${props => props.theme.blueActiveColor};
  }
`

function ResourceUrl ({ href }) {
  return (
    <ResourceUrlLink href={href}>
      <PinIconContainer>
        <APin />
      </PinIconContainer>
      <LocationTextContainer>{getStrippedHref(href)}</LocationTextContainer>
    </ResourceUrlLink>
  )
}

function ResourceTile ({
  id,
  iconUrl,
  title,
  description,
  location,
  category,
  resourceUrl,
  androidUrl,
  iosUrl,
  fbUrl,
  votes
}) {
  const [alreadyUpvoted, setAlreadyUpvoted] = useState(isAlreadyUpvoted(id))
  const [votesCount, setVotesCount] = useState(votes)

  const vote = () => {
    const value = alreadyUpvoted ? 0 : 1
    axios
      .patch(`${endpoint}/resources/${id}/vote?value=${value}`)
      .then(res => {
        saveOrUpdateLocalVote(id)
        const newVotes = res.data.data.attributes.upvotes_count
        setVotesCount(newVotes)
        setAlreadyUpvoted(!alreadyUpvoted)
      })
      .catch(err => {
        if (err.request.status === 403) {
          saveOrUpdateLocalVote(id)
          setAlreadyUpvoted(!alreadyUpvoted)
          console.warn(
            'You have already voted for this resource: ' + err.message
          )
        } else {
          console.error(
            'Ann error occuredd while upvoting a resource: ' + err.message
          )
        }
      })
  }

  const platformButtons = []
  if (androidUrl) {
    platformButtons.push(
      <PlatformButton key='android' url={androidUrl} platform='android' />
    )
  }
  if (iosUrl) {
    platformButtons.push(
      <PlatformButton key='ios' url={iosUrl} platform='ios' />
    )
  }
  if (fbUrl) {
    platformButtons.push(<PlatformButton key='fb' url={fbUrl} platform='fb' />)
  }
  return (
    <ResourceTileContainer>
      <ResourceIcon to={`/zasob/${id}`}>
        {iconUrl ? (
          <img src={iconUrl} alt='logo inicjatywy' />
        ) : (
          <RecourceMockedIcon title={title} category={category} size={130} />
        )}
      </ResourceIcon>
      <DescriptionContainer>
        <Title>
          <StyledLink to={`/zasob/${id}`}>{title}</StyledLink>
        </Title>
        <Description>{description}</Description>
        <PinsContainer>
          <Location>
            <PinIconContainer>
              <TagPin />
            </PinIconContainer>
            {location}
          </Location>
          {resourceUrl && <ResourceUrl href={resourceUrl} />}
        </PinsContainer>
      </DescriptionContainer>
      <ResourceButtonsContainer>
        <VoteButtonContainer>
          <VoteButton
            votesCount={votesCount}
            handleVote={vote}
            alreadyUpvoted={alreadyUpvoted}
          />
        </VoteButtonContainer>
        <PlatformButtonsContainer>
          <PlatformButtonContainer>
            {platformButtons[0]}
          </PlatformButtonContainer>
          <PlatformButtonContainer>
            {platformButtons[1]}
          </PlatformButtonContainer>
          <PlatformButtonContainer>
            {platformButtons[2]}
          </PlatformButtonContainer>
        </PlatformButtonsContainer>
      </ResourceButtonsContainer>
    </ResourceTileContainer>
  )
}

export default ResourceTile
