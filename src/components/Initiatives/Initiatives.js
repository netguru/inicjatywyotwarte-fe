import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { map, sortBy, filter } from 'lodash'
// import * as JsSearch from 'js-search'

import Pagination from '@material-ui/lab/Pagination'
import SearchIcon from '@material-ui/icons/Search'
import FilterListIcon from '@material-ui/icons/FilterList'

import { getDataFromAWS } from 'utils/helpers/AwsHelper'
import { useLunrSearch } from 'hooks/useLunrSearch'

import Loader from 'components/Loader/Loader'
import Error from 'components/Error/Error'
import NoInitiatives from 'components/NoInitiatives/NoInitiatives'
import ResourceTile from 'components/ResourceTile/ResourceTile'
import SelectFieldDownshift from 'components/FormPrimitives/SelectFieldDownshift/SelectFieldDownshift'
import TagsList from 'components/TagsList/TagsList'

const SvgSearchIcon = styled(SearchIcon)`
  ${props => props.theme.contrastSvgIcon
    ? `color: yellow;` :
    ``
  }
`

const PaginationWrapper = styled(Pagination)`

  ${props => props.theme.contrastSvgIcon
    ? `
      li > div {
        color: yellow;
      }

      button  {
        opacity: 1;
        color: yellow;
        background-color: black;
        border: 2px solid yellow;

        &:hover {
          background-color: yellow;
          color: black;
        }
    ` : ``
  }
`

const MainContainer = styled.div`
  background: ${props => props.theme.mainBackgroundColor};
  max-width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 4em);
  margin: 50px auto;
`

const ResourceTilesContainer = styled.div`
  width: ${props => props.theme.resourceTilesWidth};
  margin: 0 auto;
  
  @media (max-width: 1000px) {
    width: ${props => props.theme.mobileResourceTilesWidth};
  }
`

const ResourceTileWrapper = styled.div`
  margin: 1em 0;
`

const Header = styled.div`
  margin: 16px 0;
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`

const ResultsDescription = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  display: flex;

  @media (max-width: 620px) {
    flex-direction: column-reverse;
    height: 150px;
    justify-content: space-between;
    align-items: center;
  }
`

const SearchBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 240px;
  border-radius: ${props => props.theme.borderRadiusMedium};
  border: ${props => props.theme.searchIconBorder};
  margin-left: 1rem;

  &:focus-within {
    border: ${props => props.theme.inputActiveBorder};
  }
`

const ExpandTagsButton = styled.button.attrs({
  'aria-label': 'rozwiń listę tagów'
})`
  height: 40px;
  width: 90px;
  font-size: 0.85rem;
  border: 1px solid;
  border-radius: ${props => props.theme.borderRadiusBig};
  border-color: ${props =>
    props.shouldExpandTagsButtonBeActive
      ? props.theme.fontColorDark
      : props.theme.resourceTileLayoutColor};
  color: ${props =>
    props.shouldExpandTagsButtonBeActive
      ? props.theme.modalColorDark
      : props.theme.modalColorLight};
  transition: ${props => props.theme.buttonTransition};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.fontColorDark};
    color: ${props => props.theme.lightBackgroundColor};
  }
`

const StyledFilterListIcon = styled(FilterListIcon)`
  margin-left: 0.4rem;
`

const SearchInput = styled.input.attrs({
  placeholder: 'Szukaj...',
  'aria-label': 'wpisz wyszukiwaną frazę'
})`
  font-size: 0.8rem;
  padding: 0 0.8rem 0 0;
  border: none;
  border-radius: 0 ${props => props.theme.borderRadiusMedium} ${props => props.theme.borderRadiusMedium} 0;
  box-sizing: border-box;
  width: 210px;
  outline: none;
  background-color: ${props => props.theme.inputBackgroundColor};
  color: ${props => props.theme.inputTextColor};
  &::placeholder {
    color: ${props => props.theme.modalColorLight};
  }
`

const SearchClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  font-size: 1.4rem;
  background: transparent;
  width: 30px;
  height: 30px;
  color: ${props => props.theme.addInitiativeButtonBorderColor};
`

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  color: ${props => props.theme.darkBackgroundColor};
  background: ${props => props.theme.lightBackgroundColor};
  border: none;
  border-radius: ${props => props.theme.borderRadiusMedium} 0 0 ${props => props.theme.borderRadiusMedium};
  cursor: pointer;
  font-size: 0.8em;
  transition: ${props => props.theme.buttonTransition};
`

const getSearchData = history => {
  const search = history.location.search
  if (!search) {
    return ['']
  }

  const params = search.split('?')
  let decodedSearchParamTrimmed = ''

  const searchParam = params.find(param => param.startsWith('szukaj='))

  if (searchParam) {
    const splittedSearchParam = searchParam.split('&')[0]
    const decodedSearchParam = decodeURIComponent(splittedSearchParam)
    decodedSearchParamTrimmed = decodedSearchParam.slice(
      7,
      decodedSearchParam.length
    ) // removes the szukaj=
  }

  return [decodedSearchParamTrimmed]
}

const getSearchPhrase = history => getSearchData(history)[0]

const getTranslatedItemAriaLabel = (type, pageNumber, selected) => {
  const labelTypes = {
    page: selected ? '' : `Idź do strony ${pageNumber}`,
    first: 'Idź do pierwszej strony',
    last: 'Idź do ostatniej strony',
    next: 'Idź do następnej strony',
    previous: 'Idź do poprzedniej strony'
  }

  return labelTypes[type] || ''
}

const getResultsFilteredByTags = (data, tags, location) => {
  let filteredResults = [...data]
  tags.forEach(tag => {
    if (tag) {
      const foundElements = filteredResults.filter(result =>
        result.attributes.tag_list.includes(tag)
      )
      filteredResults = [...foundElements]
    }
  })
  if (location) {
    const foundElements = filteredResults.filter(result =>
      result.attributes.location.includes(location.value)
    )
    filteredResults = [...foundElements]
  }
  return filteredResults
}

export default function Initiatives ({
  category,
  categoryName,
  categoryUrl,
  page,
  error
}) {
  const history = useHistory()
  const searchPhrase = getSearchPhrase(history) //getting initial search params from url
  const [initiatives, setInitiatives] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [pageSize, setPageSize] = useState(0)
  const [tagList, setTagList] = useState([])
  const [locationList, setLocationList] = useState([])
  const [currentPage, setCurrentPage] = useState(page || 1)
  const [isTagsListOpen, setIsTagsListOpen] = useState(false)
  const [activeSearchTags, setActiveSearchTags] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [filteredInitiatives, setFilteredInitiatives] = useState([])

  const searchBoxInputRef = useRef(null)

  let pendingSearchText = searchPhrase

  const searchText = getSearchPhrase(history)

  useEffect(() => {
    const fetchInitiatives = async () => {
      await axios
        .get(getDataFromAWS('cached/', 'resources.json'))
        .then(res => {
          const { data } = res.data
          const initiatives =
            category
              ? filter(data, ['attributes.category', category])
              : data

          setInitiatives(initiatives)
        })
        .catch(err => {
          console.error('Nie udało się pobrać inicjatyw: ', err.message)
        })
        .finally(() => {
          setPageSize(10)
          setIsLoading(false)
        })
    }
    fetchInitiatives()
  }, [category])

  useEffect(() => {
    const fetchTags = async () => {
      await axios
        .get(getDataFromAWS('cached/', 'tags.json'))
        .then(res => {
          setTagList(res.data)
        })
        .catch(err => {
          console.error('Nie udało się pobrać tagów: ', err.message)
        })
    }
    fetchTags()
  },[])

  useEffect(() => {
    const fetchLocations = async () => {
      await axios
        .get(getDataFromAWS('cached/', 'locations.json'))
        .then(res => {
          setLocationList(res.data)
        })
        .catch(err => {
          console.error('Nie udało się pobrać lokacji: ', err.message)
        })
    }
    fetchLocations()
  }, [])

  useEffect(() => {
    if (page && page !== currentPage) {
      setCurrentPage(page)
    }
  }, [category, currentPage, page])

  useEffect(() => {
    if (
      searchBoxInputRef?.current?.value !== undefined
    ) {
      searchBoxInputRef.current.value = searchPhrase
    }
  })
  // const inittt = [
  //   {
  //     attributes: {
  //       android_url: "",
  //       category: "for_hospitals",
  //       contact: "Facebook page",
  //       description: "warszawa",
  //       facebook_url: "https://www.facebook.com/wzywamyposilkipl/?eid=ARCAtTcZOYq5ssHN4TSXCnhwQLIncrWYsLOHlfljskof86LG_Ij6d_R6LeciWU-BYGox--mB9Ps6gBM2&fref=mentions&__xts__[0]=68.ARDJdnC5Z_PijE0Vba071unZswE637khPAQZdesOi5y5quvgwXmuw3VBi8_NpXpP9YRC9lcpS2DFB9y4ApLbTeO9V2-XEGN3sJ06VWY92J37qofaBpQz7y-c3VVD2QoQpKDaHOHbvouUWdd8OyIBRISNhRQ3NLVbrfagsymHdQKanWIestwBKufe-2fc8AcooZNolKbmyJ8SPMb5nYX9vpnAL0ZfLM2xwZGOFrNTpViqlh0",
  //       how_to_help: "",
  //       ios_url: "",
  //       location: "Łódź",
  //       name: "@WzywamyPosiłki",
  //       organizer: "IKEA",
  //       tag_list: ["posiłki"],
  //       target_url: "http://biuroprasowe.ikea.pl/90378-pomagamy-razem-ikea-aktywnie-wlacza-sie-do-akcji-wzywamyposilki?fbclid=IwAR1jmATQ4Yg7K2gelAcT79kt2fxrcwMYVCBJtWdXmrIlJiQPAqAA17g7WdQ",
  //       thumbnail_url: "https://placeholder.co/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7c24f34016bb444d787ac7733ca2b7deb9a7f06e/ikea.jpg",
  //       upvotes_count: 13,
  //     },
  //     id: "84",
  //     type: "resources",
  //   },
  //   {
  //     attributes: {
  //       android_url: "",
  //       category: "for_hospitals",
  //       contact: "Facebook page",
  //       description: "warszawa",
  //       facebook_url: "https://www.facebook.com/wzywamyposilkipl/?eid=ARCAtTcZOYq5ssHN4TSXCnhwQLIncrWYsLOHlfljskof86LG_Ij6d_R6LeciWU-BYGox--mB9Ps6gBM2&fref=mentions&__xts__[0]=68.ARDJdnC5Z_PijE0Vba071unZswE637khPAQZdesOi5y5quvgwXmuw3VBi8_NpXpP9YRC9lcpS2DFB9y4ApLbTeO9V2-XEGN3sJ06VWY92J37qofaBpQz7y-c3VVD2QoQpKDaHOHbvouUWdd8OyIBRISNhRQ3NLVbrfagsymHdQKanWIestwBKufe-2fc8AcooZNolKbmyJ8SPMb5nYX9vpnAL0ZfLM2xwZGOFrNTpViqlh0",
  //       how_to_help: "",
  //       ios_url: "",
  //       location: "Łódź",
  //       name: "@WzywamyPosiłki",
  //       organizer: "IKEA",
  //       tag_list: ["posiłki"],
  //       target_url: "http://biuroprasowe.ikea.pl/90378-pomagamy-razem-ikea-aktywnie-wlacza-sie-do-akcji-wzywamyposilki?fbclid=IwAR1jmATQ4Yg7K2gelAcT79kt2fxrcwMYVCBJtWdXmrIlJiQPAqAA17g7WdQ",
  //       thumbnail_url: "https://placeholder.co/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7c24f34016bb444d787ac7733ca2b7deb9a7f06e/ikea.jpg",
  //       upvotes_count: 13,
  //     },
  //     id: "85",
  //     type: "resources",
  //   },
  //   {
  //     attributes: {
  //       android_url: "",
  //       category: "for_hospitals",
  //       contact: "Facebook page",
  //       description: "warszawski",
  //       facebook_url: "https://www.facebook.com/wzywamyposilkipl/?eid=ARCAtTcZOYq5ssHN4TSXCnhwQLIncrWYsLOHlfljskof86LG_Ij6d_R6LeciWU-BYGox--mB9Ps6gBM2&fref=mentions&__xts__[0]=68.ARDJdnC5Z_PijE0Vba071unZswE637khPAQZdesOi5y5quvgwXmuw3VBi8_NpXpP9YRC9lcpS2DFB9y4ApLbTeO9V2-XEGN3sJ06VWY92J37qofaBpQz7y-c3VVD2QoQpKDaHOHbvouUWdd8OyIBRISNhRQ3NLVbrfagsymHdQKanWIestwBKufe-2fc8AcooZNolKbmyJ8SPMb5nYX9vpnAL0ZfLM2xwZGOFrNTpViqlh0",
  //       how_to_help: "",
  //       ios_url: "",
  //       location: "",
  //       name: "@Wzywamy",
  //       organizer: "IKEA",
  //       tag_list: [""],
  //       target_url: "http://biuroprasowe.ikea.pl/90378-pomagamy-razem-ikea-aktywnie-wlacza-sie-do-akcji-wzywamyposilki?fbclid=IwAR1jmATQ4Yg7K2gelAcT79kt2fxrcwMYVCBJtWdXmrIlJiQPAqAA17g7WdQ",
  //       thumbnail_url: "https://placeholder.co/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7c24f34016bb444d787ac7733ca2b7deb9a7f06e/ikea.jpg",
  //       upvotes_count: 13,
  //     },
  //     id: "86",
  //     type: "resources",
  //   }
  // ]
  // const searchTest = new JsSearch.Search('id')

  // searchTest.addIndex('name')
  // searchTest.addIndex('location')
  // searchTest.addIndex('description')
  // searchTest.addIndex('tag_list')

  // searchTest.addIndex(['attributes', 'name'])
  // searchTest.addIndex(['attributes', 'location'])
  // searchTest.addIndex(['attributes', 'description'])
  // searchTest.addIndex(['attributes', 'tag_list'])

  // searchTest.addDocuments(inittt)

  // console.log('łódź', searchTest.search('łódź'))
  // console.log('posiłki', searchTest.search('posiłki'))
  // console.log('warszawa', searchTest.search('warszawa'))

  const locations = map(locationList.data, location => {
    const name = location?.attributes?.name
    return {
      label: name,
      value: name,
      id: location.id
    }
  });

  const onPageChange = page => {
    if (currentPage === page) {
      return
    }
    setCurrentPage(page)
    if (getSearchPhrase(history)) {
      const searchParam = pendingSearchText
        ? `?szukaj=${encodeURIComponent(pendingSearchText)}`
        : ''

      history.push({
        pathname: `/zasoby/${page}`,
        search: `${searchParam}`
      })
    } else if (categoryUrl) {
      history.push(`${categoryUrl}/zasoby/${page}`)
    } else {
      history.push(`/zasoby/${page}`)
    }
  }

  const searchResults = useLunrSearch(searchText, initiatives)

  const getInitiatives = () => {
    if ((pendingSearchText || (activeSearchTags || selectedItem)) && searchResults.length !== 0) {
      return searchResults
    } else if (!pendingSearchText && initiatives) {
      return initiatives
    }
    return []
  }

  const getFilteredInitiatives = !filteredInitiatives
    ? getInitiatives()
    : getResultsFilteredByTags(getInitiatives(), activeSearchTags, selectedItem)

  const totalNumberOfPages = Math.ceil(getFilteredInitiatives.length / pageSize)
  const sortInitiatives = sortBy(
    getFilteredInitiatives,
    item => item.attributes.upvotes_count
  ).reverse()

  const paginate = (array, pageSize, pageNumber) =>
    array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)

  const renderInitiatives = mapInitiatives(
    paginate(sortInitiatives, pageSize, currentPage)
  )
  const showInitiatives = Boolean(getFilteredInitiatives.length)

  const handleNewSearch = () => {
    if (
      (!pendingSearchText || pendingSearchText === ' ') &&
      !activeSearchTags.length
    ) {
      history.push({
        pathname: '/',
        search: ''
      })
    } else {
      const searchParam = pendingSearchText
        ? `?szukaj=${encodeURIComponent(pendingSearchText)}`
        : ''

      history.push({
        pathname: '/',
        search: `${searchParam}`
      })
    }
  }

  const handleExpandTags = () => {
    setIsTagsListOpen(!isTagsListOpen)
  }

  const handleActiveTagsUpdate = tags => {
    setActiveSearchTags([...tags])
    setFilteredInitiatives(
      getResultsFilteredByTags(getInitiatives(), tags, selectedItem)
    )
  }
  function handleSelectedItemChange({ selectedItem }) {
    setSelectedItem(selectedItem)
    setFilteredInitiatives(
      getResultsFilteredByTags(getInitiatives(), activeSearchTags, selectedItem)
    )
  }

  const areTagsFetchedSuccessfully = !!tagList.data
  const shouldExpandTagsButtonBeActive =
    areTagsFetchedSuccessfully &&
    (isTagsListOpen || activeSearchTags.length === tagList.length)

  if (error) {
    return <Error>{error.message}</Error>
  }
  if (!initiatives && !isLoading) {
    return <NoInitiatives />
  }
  if (isLoading) {
    return <Loader />
  }

  return (
    <MainContainer>
      <ResourceTilesContainer>
        <Header>
          <ResultsDescription>
            {pendingSearchText ? 'Znalezione' : categoryName}
          </ResultsDescription>
          <SearchContainer>
            {areTagsFetchedSuccessfully && (
              <ExpandTagsButton
                shouldExpandTagsButtonBeActive={shouldExpandTagsButtonBeActive}
                onClick={handleExpandTags}
              >
                Filtry
                <StyledFilterListIcon fontSize='small' />
              </ExpandTagsButton>
            )}
            {locations && (
              <SelectFieldDownshift
                selectedItem={selectedItem}
                handleSelectedItemChange={handleSelectedItemChange}
                placeholder='Lokalizacja'
                items={locations}
              />
            )}
            <SearchBox>
              <SearchButton aria-label='szukaj' onClick={handleNewSearch}>
                <SvgSearchIcon fontSize='small' />
              </SearchButton>
              <SearchInput
                ref={searchBoxInputRef}
                onChange={e => (pendingSearchText = e.target.value)}
                onKeyDown={e => {
                  if (e.which === 13) {
                    handleNewSearch()
                  }
                }}
              />
              {pendingSearchText && (
                <SearchClearButton
                  onClick={() => {
                    pendingSearchText = ''
                    handleNewSearch()
                  }}
                >
                  &#215;
                </SearchClearButton>
              )}
            </SearchBox>
          </SearchContainer>
        </Header>
        {areTagsFetchedSuccessfully && (
          <TagsList
            isTagsListOpen={isTagsListOpen}
            tags={tagList.data.map(tagObj => tagObj.attributes.name)}
            initialActiveTags={activeSearchTags.filter(el => el !== '')}
            handleActiveTagsUpdate={handleActiveTagsUpdate}
          />
        )}
        {!showInitiatives ? (
          <p>Brak rezultatów wyszukiwania...</p>
        ) : (
          renderInitiatives
        )}
        {totalNumberOfPages > 1 && (
          <PaginationWrapper
            getItemAriaLabel={getTranslatedItemAriaLabel}
            count={totalNumberOfPages}
            page={currentPage}
            onChange={(e, page) => onPageChange(page)}
          />
        )}
      </ResourceTilesContainer>
    </MainContainer>
  )
}

function mapInitiatives (data) {
  return data.map(resource => {
    const { id } = resource
    const {
      name,
      description,
      location,
      category,
      thumbnail_url: thumbnailUrl,
      target_url: targetUrl,
      ios_url: iosUrl,
      android_url: androidUrl,
      facebook_url: facebookUrl,
      upvotes_count: upvotesCount
    } = resource.attributes

    return (
      <ResourceTileWrapper key={id}>
        <ResourceTile
          id={id}
          iconUrl={thumbnailUrl}
          title={name}
          description={description}
          category={category}
          location={location}
          resourceUrl={targetUrl}
          votes={upvotesCount}
          androidUrl={androidUrl}
          iosUrl={iosUrl}
          fbUrl={facebookUrl}
        />
      </ResourceTileWrapper>
    )
  })
}
