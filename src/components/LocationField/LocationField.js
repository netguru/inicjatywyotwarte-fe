import React, { useState } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete"
import styled from 'styled-components'

import Label from 'components/FormPrimitives/FieldLabel/FieldLabel'

const PlacesAutocompleteWrapper = styled.div`
  .location-autocomplete-input {
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    font-size: 0.9rem;
    padding: 0 0.8rem;
    font-weight: 100;
    background: ${props => props.theme.lightBackgroundColor};
    border: 1px solid ${props => props.theme.modalColorVeryLight};
    border-radius: ${props => props.theme.borderRadiusSmall};
    color: ${props => props.theme.modalColorLight};
    outline: none;
  }

  .location-autocomplete-input-error {
    border-color: ${props => props.theme.warningColor};
  }

  .location-autocomplete-input:focus,
  .location-autocomplete-input:active {
    border: ${props => props.theme.inputActiveBorder};
  }

  .location-autocomplete-input.location-autocomplete--is-open {
    border: 1px solid ${props => props.theme.addInitiativeButtonBorderColor};
    border-bottom: none;
    border-top-left-radius: ${props => props.theme.borderRadiusSmall};
    border-top-right-radius: ${props => props.theme.borderRadiusSmall};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .location-autocomplete-dropdown {
    position: absolute;
    width: 100%;
    top: 4.8rem;
    box-sizing: border-box;
    height: auto;
    background: ${props => props.theme.lightBackgroundColor};
    border: 1px solid ${props => props.theme.addInitiativeButtonBorderColor};
    border-top: none;

    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: ${props => props.theme.borderRadiusSmall};
    border-bottom-left-radius: ${props => props.theme.borderRadiusSmall};
  }

  .location-autocomplete-suggestion-item,
  .location-autocomplete-suggestion-item--active {
    padding: 0 .8rem;
    line-height: 3rem;
    font-size: .9rem;
    font-family: 'sofia-pro', sans-serif;
  }

  .location-autocomplete-suggestion-item--active {
    background-color: ${props => props.theme.addInitiativeButtonBorderColor};
    color: ${props => props.theme.addInitiativeButtonBackgroundColor};
  }
`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
  position: relative;
`

const LocationLoader = styled.div`
  width: 100%;
  font-size: 1rem;
  margin: .5rem 0;
  text-align: center;
  position: absolute;
  top: 4.8rem;
`

export default function LocationField({
  name,
  getLocation,
  hasError,
  label
}) {
  const [address, setAddress] = useState('')

  const trimAddress = address => address.replace(', Polska', '')

  const handleChange = address => {
    setAddress(trimAddress(address))
    getLocation({
      location: address,
      googlePlaceId: ''
    })
  }

  const handleSelect = async value => {
    if (value === '') {
      getLocation({
        location: '',
        googlePlaceId: ''
      })
      return
    }
    const results = await geocodeByAddress(value)
    setAddress(trimAddress(value))
    getLocation({
      location: trimAddress(value),
      googlePlaceId: results[0].place_id
    })
  }

  const handleError = (status, clearSuggestions) => {
    const statusTypes = {
      ZERO_RESULTS: 'Brak wyników wyszukiwania',
      OVER_QUERY_LIMIT: 'Wystąpił błąd podczas wyszukiwania lokalizacji',
      REQUEST_DENIED: 'Wystąpił błąd podczas wyszukiwania lokalizacji',
      INVALID_REQUEST: 'Wprowadź lokalizację',
      UNKNOWN_ERROR: 'Wystąpił błąd podczas wyszukiwania lokalizacji',
    }
    clearSuggestions()

    return statusTypes[status] || ''
  }

  const searchOptions = {
    types: ['(cities)'],
    componentRestrictions: {country: 'pl'},
  }

  return (
    <PlacesAutocompleteWrapper>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        onError={handleError}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <InputBox>
            <Label forHtml={name}>{label}</Label>
            <input
              { ...getInputProps({
                className: `
                  location-autocomplete-input
                  ${suggestions.length > 1 ? 'location-autocomplete--is-open' : ''}
                  ${hasError ? 'location-autocomplete-input-error' : ''}
                `
              })}
            />
            <div className={suggestions.length > 1 ? 'location-autocomplete-dropdown' : ''}>
              {loading && <LocationLoader>Ładowanie ...</LocationLoader>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'location-autocomplete-suggestion-item--active'
                  : 'location-autocomplete-suggestion-item';
                return (
                  <div
                    {...getSuggestionItemProps(
                      suggestion,
                      { className }
                    )}
                  >
                    {trimAddress(suggestion.description)}
                  </div>
                )
              })}
            </div>
          </InputBox>
        )}
      </PlacesAutocomplete>
    </PlacesAutocompleteWrapper>
  )
}
