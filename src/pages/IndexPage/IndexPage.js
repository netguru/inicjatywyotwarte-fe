import React from 'react'
import { useLocation } from 'react-router-dom'

import categories from 'constants/categories'
import Toolbar from 'components/Toolbar/Toolbar'
import Initiatives from 'components/Initiatives/Initiatives'

const defaultCategory = 'recommended'

export default function IndexPage ({
  match,
  initiativesObj,
  tagsObj,
  locationsObj,
  fetchInitialData
}) {
  const page = parseInt(match.params.page) || 1
  const { pathname } = useLocation()
  const category = categories.getNameByUrl('/' + pathname.split('/')[1])

  return (
    <>
      <Toolbar />
      <Initiatives
        page={page}
        category={category}
        categoryName={categories.getText(category || defaultCategory)}
        categoryUrl={categories.getUrl(category)}
        initiativesObj={initiativesObj}
        tags={tagsObj?.data}
        locations={locationsObj && locationsObj.data}
        fetchInitialData={fetchInitialData}
      />
    </>
  )
}
