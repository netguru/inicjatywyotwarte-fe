import invert from 'lodash/invert'

const categories = {
  neighbourly_help: '/pomoc-sasiedzka',
  local_firms: '/lokalne-firmy',
  education: '/edukacja',
  for_hospitals: '/dla-szpitali'
}

const translationsMap = {
  neighbourly_help: 'Pomoc sąsiedzka',
  local_firms: 'Lokalne firmy',
  education: 'Edukacja',
  for_hospitals: 'Dla szpitali',
  recommended: 'Proponowane'
}

const urlsMap = invert(categories)

export default {
  urls: Object.values(categories),
  codes: Object.keys(categories),
  getNameByUrl: url => urlsMap[url],
  getText: name => translationsMap[name],
  getUrl: name => categories[name]
}
