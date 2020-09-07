import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Tag from 'components/Tag/Tag'

const TagsContainer = styled.div.attrs(props => ({ 'data-cy': 'tags-container' }))`
  display: flex;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;

  & > * {
    margin-right: 10px;
  }
`

const Tags = ({
  tags,
  initialActiveTags,
  handleActiveTagsUpdate,
  isTagsListOpen
}) => {
  const [activeTags, setActiveTags] = useState(initialActiveTags || [])

  useEffect(() => {
    handleActiveTagsUpdate(activeTags)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTags])

  useEffect(() => {
    if (!initialActiveTags.length && activeTags.length) {
      setActiveTags([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialActiveTags])

  const handleTagOnClick = tag => {
    if (!activeTags.includes(tag)) {
      setActiveTags(activeTags.concat([tag]))
    } else {
      setActiveTags(activeTags.filter(activeTag => activeTag !== tag))
    }
  }

  if (!tags) {
    return <span>Brak tagów</span>
  }

  const sortedTags = [...tags].sort().sort((a, b) => {
    if (activeTags.includes(a) && !activeTags.includes(b)) {
      return -1
    }
    if (!activeTags.includes(a) && activeTags.includes(b)) {
      return 1
    }
    return 0
  })

  return (
    <TagsContainer>
      {sortedTags.map(tag => {
        const isTagActive = activeTags.includes(tag)
        return (
          <Tag
            active={isTagActive}
            handleOnClick={() => handleTagOnClick(tag)}
            key={tag}
            tag={tag}
            isTagsListOpen={isTagsListOpen}
          />
        )
      })}
    </TagsContainer>
  )
}

export default Tags
