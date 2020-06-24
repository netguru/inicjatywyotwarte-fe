import { useLunr } from 'react-lunr'
import { lunrIndex } from 'utils/LunrIndex'
import { keyBy, map } from 'lodash'

const enhanceSearchPhrase = phrase => {
  const splitPhrase = phrase.trim().split(' ')
  if(splitPhrase.length === 1 && splitPhrase[0] !== '') {
    return `
      name:${phrase}~2
      description:${phrase}~1
      location:${phrase}~1
      tags:${phrase}~2
    `
  }
  if(splitPhrase.length > 1) {
    return map(splitPhrase, word => (
      `+${word}~1`
    )).join(' ')
  }
  return ''
}

export const useLunrSearch = (searchPhrase = '', data) => {
  const mappedData = map({ data }, item => keyBy(item, 'id'))

  const searchResults = useLunr(
    enhanceSearchPhrase(searchPhrase),
    lunrIndex(mappedData),
    mappedData[0]
  )

  return searchResults
}
