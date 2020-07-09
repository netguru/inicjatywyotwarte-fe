import AWS from 'aws-sdk'
import { signedUrlExpireSeconds } from 'constants/constants';

const useLocal = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
const bucketUrl = process.env.REACT_APP_STORAGE_BUCKET_URL

const s3bucket = new AWS.S3({
  accessKeyId: 'fakeLocalstackAccessKey',
  secretAccessKey: 'fakeLocalstackSecretAccessKey',
  region: 'eu-central-1',
  endpoint: 'http://localhost:4572',
  s3ForcePathStyle: true
})

const params = (file) => ({
  Bucket: 'local-bucket',
  Key: `cached/${file}`,
  Expires: signedUrlExpireSeconds
})

export const getDataFromAWS = (file) => {
  if (useLocal) {
    return s3bucket.getSignedUrl('getObject', params(file))
  } else {
    return `${bucketUrl}/${file}`
  }

}
