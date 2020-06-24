import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: calc(${props => props.theme.personTileWidth} + 120px);
  font-size: 0.85rem;
`

const ImageContainer = styled.div`
  width: 100%;
  height: ${props => props.theme.persontil};

  img {
    border-radius: ${props => props.theme.borderRadiusMedium};
    max-width: 100%;
    max-height: 100%;
  }
`

const Name = styled.h3`
  margin: 0.6rem 0 0.5rem 0;
  font-weight: 500;
`

const Role = styled.div`
  margin: 0.4rem 0;
  font-weight: 300;
  line-height: 1rem;
`

const Company = styled.div`
  margin: 0.8rem 0;
  color: ${props => props.theme.fontColorMedium};
  font-weight: 300;
`

const PersonTile = ({ photo, name, role, company }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={photo} alt='' />
      </ImageContainer>
      <Name>{name}</Name>
      <Role>{role}</Role>
      <Company>{company}</Company>
    </Container>
  )
}

export default PersonTile
