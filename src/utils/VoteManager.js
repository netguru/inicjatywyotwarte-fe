const votesStorageName = 'initiativesLocalVotes'

const getLocalVotes = () => localStorage.getItem(votesStorageName)

const setLocalVotes = votes =>
  localStorage.setItem(votesStorageName, JSON.stringify(votes))

export const saveOrUpdateLocalVote = id => {
  const localVotes = getLocalVotes()
  if (!localVotes) {
    const newLocalVotes = []
    newLocalVotes.push(id)
    setLocalVotes(newLocalVotes)
    return
  }
  const parsedLocalVotes = JSON.parse(localVotes)
  if (!parsedLocalVotes.includes(id)) {
    parsedLocalVotes.push(id)
    setLocalVotes(parsedLocalVotes)
    return
  }
  const newLocalVotes = parsedLocalVotes.filter(loadedItem => loadedItem !== id)
  setLocalVotes(newLocalVotes)
}

export const isAlreadyUpvoted = id => {
  const localVotes = getLocalVotes()
  if (!localVotes || !JSON.parse(localVotes).includes(id)) {
    return false
  }
  return true
}
