const bucketUrl = process.env.REACT_APP_STORAGE_BUCKET_URL

export const getJsonLink = (file) => {
  return `${bucketUrl}/${file}`
}