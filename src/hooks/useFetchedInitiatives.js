import { mockedInitiatives } from 'constants/mockedData'
import { getJsonLink } from 'utils/helpers/JsonHelper'
import { origin } from 'constants/constants'
import { filter } from 'lodash'
import axios from 'axios'
import { useState, useEffect } from 'react'

const isDevelopmentEnv = process.env.NODE_ENV === 'development'

const filterInitiatives = (initiatives, category) =>
  category ? filter(initiatives, ['attributes.category', category]) : initiatives

const useFetchedInitiatives = (category) => {
  const [initiatives, setInitiatives] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInitiatives = async () => {
      await axios.get(getJsonLink('resources.json'), { headers: { 'Access-Control-Allow-Origin': origin }
      }).then(res => {
        setInitiatives(filterInitiatives(res.data, category))
      }).catch(err => {
        console.error('Nie udało się pobrać inicjatyw: ', err.message)
      }).finally(() => {
        setIsLoading(false)
      })
    }

    if (isDevelopmentEnv) {
      setInitiatives(filterInitiatives(mockedInitiatives, category))
      setIsLoading(false)
    } else {
      fetchInitiatives();
    }
  }, [category]);

  return [initiatives, isLoading];
}

export default useFetchedInitiatives