import { mockedLocations } from 'constants/mockedData'
import { getJsonLink } from 'utils/helpers/JsonHelper'
import { origin } from 'constants/constants'
import axios from 'axios'
import { useState, useEffect } from 'react'

const isDevelopmentEnv = process.env.NODE_ENV === 'development'

const useFetchedLocations = () => {
  const [locationList, setLocationList] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      await axios
        .get(getJsonLink('locations.json'),
          { headers: {'Access-Control-Allow-Origin': origin} })
        .then(res => {
          setLocationList(res.data)
        })
        .catch(err => {
          console.error('Nie udało się pobrać lokacji: ', err.message)
        })
    }

    if (isDevelopmentEnv) {
      setLocationList(mockedLocations)
    } else {
      fetchLocations();
    }
  }, []);

  return locationList;
}

export default useFetchedLocations