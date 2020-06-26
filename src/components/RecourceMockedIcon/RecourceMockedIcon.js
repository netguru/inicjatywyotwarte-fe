import React from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles';

const Icon = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  box-sizing: border-box;
  padding: 10px;
  border-radius: inherit;
  text-align: center;
  font-size: 1.2rem;

  ${props => `background: ${props.bgColorName};`}
  ${props => `color: ${props.textColorName};`}
`

const maxNumberOfCharacters = 30

const RecourceMockedIcon = ({ title, category, size }) => {
  const theme = useTheme();
  let bgColorName = null
  let textColorName = null
  if (category === 'neighbourly_help') {
    bgColorName = theme.mainColorCategoryNeighbour
    textColorName = theme.textMainColorCategoryNeighbour
  } else if (category === 'local_firms') {
    bgColorName = theme.mainColorCategoryBusinesses
    textColorName = theme.textMainColorCategoryBusinesses
  } else if (category === 'education') {
    bgColorName = theme.mainColorCategoryEducation
    textColorName = theme.textMainColorCategoryEducation
  } else if (category === 'for_hospitals') {
    bgColorName = theme.mainColorCategoryHospitals
    textColorName = theme.textMainColorCategoryHospitals
  } else {
    bgColorName = theme.mainColor
    textColorName = theme.toolbarMainColor
  }

  return (
    <Icon bgColorName={bgColorName} textColorName={textColorName} size={size}>
      {title.slice(0, maxNumberOfCharacters)}
      {title.length > maxNumberOfCharacters && '...'}
    </Icon>
  )
}

export default RecourceMockedIcon
