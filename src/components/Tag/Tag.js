import React from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import CloseIcon from '@material-ui/icons/Close'

const getBasicTagColor = theme => theme.tagColor

const getHoverBorderColor = theme => hexToRgba(getBasicTagColor(theme), '0.2')

const getBackgroundColor = theme => hexToRgba(theme.tagBackgroundColor)

const TagItem = styled.div`
  height: 2rem;
  color: ${props =>
    props.active ? props.theme.fontColorLight : getBasicTagColor(props.theme)};
  background: ${props => getBackgroundColor(props.theme)};
  box-sizing: border-box;
  border-radius: ${props => props.theme.borderRadiusBig};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  margin: 4px 0;
  cursor: pointer;
  box-shadow: 0px 0px 0px 2px
    ${props => (props.active ? getBasicTagColor(props.theme) : 'transparent')};

  &:hover {
    box-shadow: 0px 0px 0px 2px ${props => getHoverBorderColor(props.theme)};
  }
`

const StyledCloseIcon = styled(CloseIcon)`
  margin-left: 0.5rem;
`

const Tag = ({ active, handleOnClick, tag, isTagsListOpen }) => {
  const shouldTagBeCollapsed = active || (!active && isTagsListOpen)

  return (
    <>
      {shouldTagBeCollapsed ? (
        <TagItem active={active} onClick={handleOnClick}>
          {tag}
          {active && <StyledCloseIcon fontSize='small' />}
        </TagItem>
      ) : null}
    </>
  )
}

export default Tag
