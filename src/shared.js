export const getStrippedHref = url =>
  url.replace(/^https?:\/\/(www.)?/, '').replace(/\/$/, '')

export const getShrinkedMainHref = url => {
  const strippedUrl = getStrippedHref(url)
  return strippedUrl.split('/')[0]
}
