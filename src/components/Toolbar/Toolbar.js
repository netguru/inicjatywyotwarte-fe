import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import categories from 'constants/categories'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core'

const ToolbarWrapper = styled.div`
  background-color: ${props => props.theme.lightBackgroundColor};
  box-shadow: ${props => props.theme.shadowSmall};
`

const ToolbarContent = styled.div`
  height: ${props => props.theme.toolbarHeight};
  width: ${props => props.theme.resourceTilesWidth};
  margin: 0 auto;
  background-color: ${props => props.theme.lightBackgroundColor};
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 1000px) {
    width: ${props => props.theme.mobileResourceTilesWidth};
  }

  & > *:not(:last-child) {
    margin-right: 5px;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 300;
  box-sizing: border-box;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1rem;
  color: inherit;
  border-bottom: 2px solid transparent;
  
  ${props => props.main && `
    position: relative;
  
    &:after {
     width: 1px;
     height: 1rem;
     content: '';
     display: block;
     position: absolute;
     right: 0;
     background: ${props.color};
    }
  `}

  &:hover {
    font-weight: 500;
    color: ${props => props.color};
  }

  @media (max-width: 600px) {
    font-size: 13px;
  }
`

const Item = ({ href, children, color, main, exact }) => {
  const activeStyle =
    {
      fontWeight: '500',
      color: color,
      borderColor: color
    }

  return (
    <StyledNavLink color={color} main activeStyle={activeStyle} exact={exact} to={href}>
      {children}
    </StyledNavLink>
  )
}

const Toolbar = () => {
  const { pathname } = useLocation()
  const theme = useTheme();

  let color = null
  if (pathname.startsWith('/pomoc-sasiedzka')) {
    color = theme.toolbarMainColorCategoryNeighbour
  } else if (pathname.startsWith('/lokalne-firmy')) {
    color = theme.toolbarMainColorCategoryBusinesses
  } else if (pathname.startsWith('/edukacja')) {
    color = theme.toolbarMainColorCategoryEducation
  } else if (pathname.startsWith('/dla-szpitali')) {
    color = theme.toolbarMainColorCategoryHospitals
  } else {
    color = theme.toolbarMainColor
  }

  return (
    <ToolbarWrapper>
      <ToolbarContent>
        <Item
          href={'/'}
          color={color}
          main
          exact
        >
          Wszystkie
        </Item>
        <Item
          href={categories.getUrl('neighbourly_help')}
          color={color}
        >
          Pomoc sąsiedzka
        </Item>
        <Item href={categories.getUrl('local_firms')} color={color}>
          Lokalne firmy
        </Item>
        <Item href={categories.getUrl('education')} color={color}>
          Edukacja
        </Item>
        <Item href={categories.getUrl('for_hospitals')} color={color}>
          Dla szpitali
        </Item>
      </ToolbarContent>
    </ToolbarWrapper>
  )
}

export default Toolbar
