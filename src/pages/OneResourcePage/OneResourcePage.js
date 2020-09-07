import React, { useState } from 'react'
import axios from 'axios'
import { endpoint } from 'constants/constants'
import styled from 'styled-components'
import { find } from 'lodash'
import categories from 'constants/categories'
import { getShrinkedMainHref } from 'shared'
import { saveOrUpdateLocalVote, isAlreadyUpvoted } from 'utils/VoteManager'
import { useTheme } from '@material-ui/core/styles';
import useFetchedInitiatives from 'hooks/useFetchedInitiatives'

import Loader from 'components/Loader/Loader'
import Error from 'components/Error/Error'
import RecourceMockedIcon from 'components/RecourceMockedIcon/RecourceMockedIcon'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import VoteButton from 'components/Buttons/VoteButton/VoteButton'
import PlatformButton from 'components/Buttons/PlatformButton/PlatformButton'
import { ReactComponent as TagPin } from 'assets/tag_pin_dark.svg'
import { ReactComponent as LightTagPin } from 'assets/tag_pin.svg'

const platformButtonSize = 60

const MainContainer = styled.div`
  width: ${props => props.theme.resourceTilesWidth};
  box-sizing: border-box;
  border-radius: ${props => props.theme.borderRadiusSmall};
  background: ${props => props.theme.lightBackgroundColor};
  display: flex;
  flex-direction: column;
  position: relative;

  margin: 2rem auto;
  padding: 4rem 3rem 3rem 3rem;
  
  @media (max-width: 1000px) {
    width: ${props => props.theme.mobileResourceTilesWidth};
    padding: 4rem 1rem 1.5rem 1.5rem;
  }
`

const SubContainer = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const SubContentWrapper = styled.div`
  width: 50%;
`

const StyledArrowBack = styled(ArrowBackIcon)`
  color: ${props => props.theme.arrowBackColor};
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 4px;
`

const GoBackButton = styled.button.attrs({
  'aria-label': 'wróć',
  'data-cy': 'one-resource-page-go-back-button'
})`
  color: ${props => props.theme.fontColorDark};
  background: transparent;
  border: none;
  font-size: 0.9rem;
  width: -moz-fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.5rem 2rem;

  &:hover {
    color: ${props => props.theme.linkHoverLightColor};
  }
`

const Header = styled.header.attrs(props => ({ 'data-cy': 'one-resource-page-header' }))`
  display: flex;
  margin-bottom: 4rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

const ResourceIcon = styled.div`
  height: 150px;
  width: 150px;
  border-radius: ${props => props.theme.borderRadiusMedium};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  flex-shrink: 0;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: ${props => props.theme.borderRadiusMedium};
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
  }
`

const HeaderDescription = styled.div`
  flex-grow: 1;
  min-width: 0;
  margin-top: 0.5rem;

  @media (max-width: 800px) {
    max-width: 90%;
  }
`

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  width: 100%;
  word-break: break-word;
  line-height: 2rem;
  margin-top: 5px;
`

const SubTitle = styled.span`
  color: ${props => props.theme.fontColorMedium};
  text-transform: uppercase;
  line-height: 1.7rem;
`

const Description = styled.div`
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.7rem;
  margin: 1rem 0 2.5rem 0;
`

const PinIconContainer = styled.div`
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;

  & > svg {
    color: red;
  }
`

const PlatformLinkTilesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const PlatformLinkTile = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  width: 150px;
`

const Tag = styled.span`
  display: inline-block;
  margin-right: 1rem;
`

const PlatformButtonContainer = styled.div`
  width: ${platformButtonSize}px;
  height: ${platformButtonSize}px;
  margin-bottom: 1rem;
`

const PlatformDescription = styled.div`
  margin: 0 auto;
  text-align: center;
`

const UrlLink = styled.a.attrs({
  'aria-label': 'odwiedź stronę z aplikacją',
  rel: 'noopener noreferrer',
  target: '_blank'
})`
  display: inline-flex;
  align-items: center;
  font-weight: 300;
  color: ${props => props.dark ? props.theme.fontColorDark : props.theme.fontColorMedium };
  text-decoration: none;
  margin-right: 1rem;
  transition: ${props => props.theme.buttonTransition};
  cursor: pointer;
  min-width: 0;

  &:hover {
    color: ${props => props.theme.blueActiveColor};
  }

  @media (max-width: 700px) {
    max-width: 100%;
    margin-right: 0;
  }
`

const UrlShrinkingContainer = styled.address`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const VoteButtonContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 150px;
  margin-left: 1.5rem;
`

const OneResourcePage = ({
  history,
  match,
  error,
}) => {
  const theme = useTheme()
  const resourceId = match.params.id
  const [initiatives, isLoading] = useFetchedInitiatives()
  const [votesCount, setVotesCount] = useState(null)
  const [alreadyUpvoted, setAlreadyUpvoted] = useState(
    isAlreadyUpvoted(resourceId)
  )

  const initiative = () => resourceId ? find(initiatives, ['id', resourceId]) : null

  const vote = async () => {
    const value = alreadyUpvoted ? 0 : 1
    await axios
      .patch(`${endpoint}/resources/${resourceId}/vote?value=${value}`)
      .then(res => {
        saveOrUpdateLocalVote(resourceId)
        const newVotes = res.data.data.attributes.upvotes_count
        setVotesCount(newVotes)
        setAlreadyUpvoted(!alreadyUpvoted)
      })
      .catch(err => {
        if (err.request.status === 403) {
          saveOrUpdateLocalVote(resourceId)
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

  if (error) {
    return <Error>{error.message}</Error>
  }
  if (isLoading) {
    return <Loader />
  }

  const goBackHandler = () => {
    if (history.action === 'POP') {
      history.push('/')
    } else {
      history.goBack()
    }
  }

  const {
    name,
    description,
    category,
    contact,
    location,
    thumbnail_url: thumbnailUrl,
    target_url: targetUrl,
    ios_url: iosUrl,
    android_url: androidUrl,
    facebook_url: fbUrl,
    tag_list: tags,
    how_to_help: howToHelp,
    upvotes_count: upvotesCount
  } = initiative().attributes

  const platformTiles = []
  if (androidUrl) {
    platformTiles.push(
      <>
        <PlatformButtonContainer>
          <PlatformButton
            key='android'
            url={androidUrl}
            platform='android'
            size={platformButtonSize}
          />
        </PlatformButtonContainer>
        <PlatformDescription>Aplikacja Android</PlatformDescription>
      </>
    )
  }
  if (iosUrl) {
    platformTiles.push(
      <>
        <PlatformButtonContainer>
          <PlatformButton
            key='ios'
            url={iosUrl}
            platform='ios'
            size={platformButtonSize}
          />
        </PlatformButtonContainer>
        <PlatformDescription>Aplikacja iOS</PlatformDescription>
      </>
    )
  }
  if (fbUrl) {
    platformTiles.push(
      <>
        <PlatformButtonContainer>
          <PlatformButton
            key='fb'
            url={fbUrl}
            platform='fb'
            size={platformButtonSize}
          />
        </PlatformButtonContainer>
        <PlatformDescription>Facebook</PlatformDescription>
      </>
    )
  }

  return (
    <MainContainer>
      <GoBackButton onClick={goBackHandler}>
        <StyledArrowBack fontSize='small' />
        wróć
      </GoBackButton>
      <Header>
        <ResourceIcon>
          {thumbnailUrl ? (
            <img src={thumbnailUrl} alt='logo inicjatywy' />
          ) : (
            <RecourceMockedIcon title={name} category={category} size={150} />
          )}
        </ResourceIcon>
        <HeaderDescription>
          <SubTitle>{categories.getText(category)}</SubTitle>
          <Title>{name}</Title>
        </HeaderDescription>
        <VoteButtonContainer>
          <VoteButton
            votesCount={votesCount ? votesCount : upvotesCount}
            handleVote={vote}
            alreadyUpvoted={alreadyUpvoted}
          />
        </VoteButtonContainer>
      </Header>
      <section>
        <SubTitle>opis inicjatywy</SubTitle>
        <Description>{description}</Description>
        {howToHelp && (
          <>
            <SubTitle>w jaki sposób możesz wesprzeć inicjatywę lub uzyskać pomoc?</SubTitle>
            <Description>{howToHelp}</Description>
          </>
        )}
        <SubContainer>
          {contact && (
            <SubContentWrapper>
              <SubTitle>kontakt</SubTitle>
              <Description>{contact}</Description>
            </SubContentWrapper>
          )}
          <SubContentWrapper>
            <SubTitle>lokalizacja</SubTitle>
            <Description>
              <PinIconContainer>
                {theme.contrastSvgIcon ? <TagPin /> : <LightTagPin /> }
              </PinIconContainer>
              {location}
            </Description>
          </SubContentWrapper>
        </SubContainer>
        <SubTitle>linki</SubTitle>
        <Description>
          Strona internetowa:{' '}
          <UrlLink href={targetUrl}>
            <UrlShrinkingContainer>
              {getShrinkedMainHref(targetUrl)}
            </UrlShrinkingContainer>
          </UrlLink>
        </Description>
        {platformTiles.length ? (
          <Description>
            <PlatformLinkTilesContainer>
              <PlatformLinkTile>{platformTiles[0]}</PlatformLinkTile>
              <PlatformLinkTile>{platformTiles[1]}</PlatformLinkTile>
              <PlatformLinkTile>{platformTiles[2]}</PlatformLinkTile>
            </PlatformLinkTilesContainer>
          </Description>
        ) : null}
        {tags.length ? (
          <>
            <SubTitle>tagi</SubTitle>
            <Description>
              {tags.map(tag => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </Description>
          </>
        ) : null}
      </section>
    </MainContainer>
  )
}

export default OneResourcePage
