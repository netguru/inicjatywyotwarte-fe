import { mockedTags } from 'constants/mockedData'
import { getJsonLink } from 'utils/helpers/JsonHelper'
import { origin } from 'constants/constants'
import axios from 'axios'
import { useState, useEffect } from 'react'

const isDevelopmentEnv = process.env.NODE_ENV === 'development'

const useFetchedTags = () => {
  const [tagList, setTagList] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      await axios
        .get(getJsonLink('tags.json'),
          { headers: {'Access-Control-Allow-Origin': origin} })
        .then(res => {
          setTagList(res.data)
        })
        .catch(err => {
          console.error('Nie udało się pobrać tagów: ', err.message)
        })
    }

    if (isDevelopmentEnv) {
      setTagList(mockedTags)
    } else {
      fetchTags();
    }
  }, []);

  return tagList;
}

export default useFetchedTags