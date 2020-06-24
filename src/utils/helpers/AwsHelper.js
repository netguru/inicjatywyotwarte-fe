import AWS from 'aws-sdk'
import { signedUrlExpireSeconds } from 'constants/constants';

const s3bucket = new AWS.S3({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION
})

const params = (path, file) => ({
  Bucket: process.env.REACT_APP_BUCKET,
  Key: `${path}${file}`,
  Expires: signedUrlExpireSeconds
})

export const getDataFromAWS = (path, file) => {
  return s3bucket.getSignedUrl('getObject', params(path, file))
}
