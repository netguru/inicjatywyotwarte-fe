import React from 'react'
import styled from 'styled-components'

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

  ${props => `background: var(${props.bgColorName});`}
  ${props => `color: var(${props.textColorName});`}
`

const maxNumberOfCharacters = 30

const RecourceMockedIcon = ({ title, category, size }) => {
  let bgColorName = null
  let textColorName = null
  if (category === 'neighbourly_help') {
    bgColorName = '--main-color-category-neighbour'
    textColorName = '--text-main-color-category-neighbour'
  } else if (category === 'local_firms') {
    bgColorName = '--main-color-category-businesses'
    textColorName = '--text-main-color-category-businesses'
  } else if (category === 'education') {
    bgColorName = '--main-color-category-education'
    textColorName = '--text-main-color-category-education'
  } else if (category === 'for_hospitals') {
    bgColorName = '--main-color-category-hospitals'
    textColorName = '--text-main-color-category-hospitals'
  } else {
    bgColorName = '--main-color'
    textColorName = '--toolbar-main-color'
  }

  return (
    <Icon bgColorName={bgColorName} textColorName={textColorName} size={size}>
      {title.slice(0, maxNumberOfCharacters)}
      {title.length > maxNumberOfCharacters && '...'}
    </Icon>
  )
}

export default RecourceMockedIcon
