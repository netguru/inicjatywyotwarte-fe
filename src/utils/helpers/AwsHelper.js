import AWS from 'aws-sdk'
import { signedUrlExpireSeconds } from 'constants/constants';

const useLocal = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

const s3bucket = new AWS.S3({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION,
  endpoint: useLocal ? 'http://localhost:4572' : undefined,
  s3ForcePathStyle: true
})

const params = (path, file) => ({
  Bucket: useLocal ? 'local-bucket' : process.env.REACT_APP_BUCKET,
  Key: `${path}${file}`,
  Expires: signedUrlExpireSeconds
})

export const getDataFromAWS = (path, file) => {
  return s3bucket.getSignedUrl('getObject', params(path, file))
}
