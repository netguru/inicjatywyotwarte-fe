import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainContainer = styled.div`
  width: ${props => props.theme.resourceTilesWidth};
  background: ${props => props.theme.lightBackgroundColor};
  margin: 2rem auto 0 auto;
  border-radius: ${props => props.theme.borderRadiusSmall};
  padding: 1px 3rem 3rem 3rem;
  box-sizing: border-box;
  
  @media (max-width: 1000px) {
    width: ${props => props.theme.mobileResourceTilesWidth};
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 1px 1rem 3rem 1rem;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 34px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const FullTextContent = styled.div`
  width: 100%;
`

export const TextContent = styled.div`
  width: 45%;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const Header = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 34px 0;
`

export const Description = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.8rem;
  ${props => props.small && `font-size: 0.9rem;`}
  ${props => props.light && `color: ${props.theme.fontColorMedium};`}
  ${props =>
    props.concise &&
    `
  line-height: 1.4rem; 
  margin: 0.7rem 0;`}
`

export const ExternalLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.blueActiveColor};
`

const listStyles = `
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.8rem;
`

export const OrderedList = styled.ol`
  ${listStyles}

  ${props => props.type && `${props.type};`}
`

export const List = styled.ul`
  ${listStyles}

  ${props => props.type && `${props.type};`}
`

export const AdvancedList = styled.ol`
  ${listStyles}
  ${props => props.noLeftSpace && 'padding-left: 0;'}
  counter-reset: item;

  li {
    display: block;
    padding-left: 0;

    &:before {
      content: counters(item, '.') '. ';
      counter-increment: item;
    }
  }
`

export const ListItem = styled.li`
  padding-left: 1rem;
  margin: 0.5rem 0;

  ${props => props.small && `font-size: 0.9rem;`}
  ${props =>
    props.concise &&
    `
  line-height: 1.4rem; 
  margin: 0.7rem 0;`}
`

export const DefinitionsContainer = styled.div`
  margin-left: 2.5rem;
`
