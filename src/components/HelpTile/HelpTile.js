import React, { useState } from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Collapse from '@material-ui/core/Collapse'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  background: ${props => props.theme.lightBackgroundColor};
  border: 1px solid ${props => props.theme.resourceTileLayoutColor};
  border-radius: ${props => props.theme.borderRadiusSmall};
`

const Tile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1.3rem 2.5rem;
`

const HeaderText = styled.div`
  font-weight: 400;
  font-size: 1rem;
`

const HeaderArrow = styled.div`
  display: flex;
  align-items: center;
  transition: ${props => props.theme.buttonTransition};

  &:hover {
    box-shadow: ${props => props.theme.shadowButtonHover};
    border-radius: 50px;
  }
`

const Description = styled.div`
  padding: 1rem 2.5rem 1.3rem;
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.5rem;
  color: ${props => props.theme.modalColorLight};
  text-align: justify;
`

const HelpTile = ({ headerText, descriptionText }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Tile
        id={headerText}
        aria-controls={`${headerText}sectionId`}
        aria-expanded={isOpen.toString()}
        aria-disabled={isOpen.toString()}
        onClick={toggleIsOpen}
      >
        <HeaderText>{headerText}</HeaderText>
        <HeaderArrow>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </HeaderArrow>
      </Tile>
      <Collapse timeout={300} in={isOpen}>
        <Description
          id={`${headerText}sectionId`}
          role='region'
          aria-labelledby={headerText}
        >
          {descriptionText}
        </Description>
      </Collapse>
    </Container>
  )
}

export default HelpTile

HelpTile.propTypes = {
  headerText: PropTypes.string.isRequired,
  descriptionText: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}
