import React from 'react'
import AndroidIcon from '@material-ui/icons/Android'
import AppleIcon from '@material-ui/icons/Apple'
import FacebookIcon from '@material-ui/icons/Facebook'
import styled from 'styled-components'

const Button = styled.a.attrs({
  'aria-label': 'odwiedź stronę z aplikacją',
  rel: 'noopener noreferrer',
  target: '_blank'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.size
      ? `
      height: ${props.size}px; 
      width: ${props.size}px;
      font-size: ${props.size / 1.7}px;`
      : `
      height: 2.5rem; 
      width: 2.5rem;
      font-size: 24px;
  `}

  color: ${props => props.theme.fontColorMedium};
  border: 1px solid ${props => props.theme.resourceTileLayoutColor};
  border-radius: 50%;
  cursor: pointer;
  transition: ${props => props.theme.buttonTransition};

  &:hover {
    background: ${props => props.theme.fontColorDark};
    color: ${props => props.theme.lightBackgroundColor};
    border-color: ${props => props.theme.fontColorDark};
  }
`
Button.displayName = 'PlatformButton';

export default function PlatformButton ({ url, platform, size }) {
  const icon =
    platform === 'android' ? (
      <AndroidIcon fontSize='inherit' />
    ) : platform === 'ios' ? (
      <AppleIcon fontSize='inherit' />
    ) : platform === 'fb' ? (
      <FacebookIcon fontSize='inherit' />
    ) : null

  return (
    <Button href={url} size={size}>
      {icon}
    </Button>
  )
}
