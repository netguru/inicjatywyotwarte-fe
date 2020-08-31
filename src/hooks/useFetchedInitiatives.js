import { mockedInitiativesData } from '../constants/mockedData'
import { getJsonLink } from '../utils/helpers/JsonHelper'
import axios from 'axios'

const fetchInitiativesFromBucket = async () => {
  await axios
    .get(getJsonLink('resources.json'),
      { headers: {'Access-Control-Allow-Origin': origin} })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.error('Nie udało się pobrać inicjatyw: ', err.message)
    })
};

export const useFetchedInitiatives = () => {
  return process.env.NODE_ENV === 'development'
    ? mockedInitiativesData
    : fetchInitiativesFromBucket();
}