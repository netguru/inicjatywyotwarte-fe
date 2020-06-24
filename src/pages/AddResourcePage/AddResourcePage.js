import React, { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import axios from 'axios'
import categories from 'constants/categories'
import styled from 'styled-components'
import { endpoint } from 'constants/constants'

import { ReactComponent as ThankYouIllustration } from 'assets/thank_you_illustration.svg'

import SummaryButton from 'components/Buttons/SummaryButton/SummaryButton'
import LocationField from 'components/LocationField/LocationField'
import InputField from 'components/FormPrimitives/InputField/InputField'
import CheckboxField from 'components/FormPrimitives/CheckboxField/CheckboxField'
import TextareaField from 'components/FormPrimitives/TextareaField/TextareaField'
import SelectField from 'components/FormPrimitives/SelectField/SelectField'

import './AddResourcePage.css'

const MainContainer = styled.div`
  max-width: 36rem;
  padding: 1rem;
  margin: 0 auto;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.checkboxes ? 'row' : 'column')};
  margin-bottom: 1.5rem;
  width: 100%;
`

const Header = styled.h2`
  font-weight: 500;
  font-size: 1.7rem;
`

const StyledThankYouIllustration = styled(ThankYouIllustration)`
  width: 100%;
`

const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  padding: 0.8rem 3.5rem;
  border: none;
  background: ${props => props.theme.submitButtonBackgroundColor};
  ${props  => props.theme.submitButtonBorder
    ? 'border: 1px solid;' : ''  
}
  color: ${props => props.theme.fontColorLight};
  font-size: 1rem;
  border-radius: 20px;
  transition: ${props => props.theme.buttonTransition};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.blueActiveColorDark};
  }
`

const ResultContentWrapper = styled.div`
  text-align: center;
  width: 70%;
  margin: 0 auto;
`

const ResultContentDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  width: 80%;
  margin: 0 auto;
`

const checkValidation = formData => {
  const errors = []
  if (!formData.name) {
    errors.push({ field: 'name', message: 'Wprowadź nazwę inicjatywy' })
  } else if (formData.name.length > 250) {
    errors.push({ field: 'name', message: 'Maksymalna długość 250 znaków' })
  }
  const urlRegExp = new RegExp(
    '^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$'
  )
  if (formData.target_url && !urlRegExp.test(formData.target_url)) {
    errors.push({ field: 'target_url', message: 'Niepoprawny adres url' })
  }
  if (!formData.draft_description) {
    errors.push({ field: 'description', message: 'Wprowadź opis inicjatywy' })
  } else if (
    formData.draft_description &&
    formData.draft_description.length > 2000
  ) {
    errors.push({
      field: 'draft_description',
      message: 'Maksymalna długość 2000 znaków'
    })
  }
  if (formData.location && formData.google_place_id === '') {
    errors.push({ field: 'location', message: 'Wybierz lokalizację z listy' })
  }
  return errors
}

const sendRequest = (e, requestBody, history) => {
  Array.from(e.target.elements)
    .find(el => el.type === 'submit')
    .classList.add('add-resource-modal__submit-button--disabled')

  const jsonRequestBody = JSON.stringify(requestBody)
  const conf = {
    headers: {
      'Content-Type': 'application/vnd.api+json'
    }
  }

  axios
    .post(`${endpoint}/resources`, jsonRequestBody, conf)
    .then(res => {
      if (responseObj.errors.length) {
        responseObj = { errors: [], status: res.status }
      }
      history.push('/dodaj-inicjatywe/sukces')
    })
    .catch(err => {
      responseObj = {
        errors: err.response.data.errors,
        status: err.response.status
      }
      history.push('/dodaj-inicjatywe/blad')
      console.error(
        'Ann error occuredd while upvoting a resource: ' + err.message
      )
    })
}

let responseObj = { errors: [], status: null }

export default function AddResourcePage () {
  return (
    <MainContainer>
      <Switch>
        <Route
          path='/dodaj-inicjatywe/sukces'
          component={ResourceAddedContent}
        />
        <Route
          path='/dodaj-inicjatywe/blad'
          component={ResourceAddingErrorContent}
        />
        <Route path='/dodaj-inicjatywe' component={AddResourceContent} />
      </Switch>
    </MainContainer>
  )
}

function AddResourceContent () {
  const history = useHistory()

  const [nameError, setNameError] = useState()
  const [targetUrlError, setTargetUrlError] = useState()
  const [location, setLocation] = useState('')
  const [googlePlaceId, setGooglePlaceId] = useState('')
  const [locationError, setLocationError] = useState()
  const [descriptionError, setDescriptionError] = useState()

  const updateErrors = errors => {
    const getError = propertyName => {
      const errorObj = errors.find(erObj => erObj.field === propertyName)
      if (errorObj) {
        return errorObj.message
      }
    }

    const nameEr = getError('name')
    const targetUrlEr = getError('target_url')
    const descriptionEr = getError('description')
    const locationEr = getError('location')

    setNameError(nameEr)
    setTargetUrlError(targetUrlEr)
    setDescriptionError(descriptionEr)
    setLocationError(locationEr)
  }

  const getLocation =  ({ location, googlePlaceId }) => {
    setLocation(location)
    setGooglePlaceId(googlePlaceId)
    setLocationError('')
  }

  function onSubmitHandler (e) {
    e.preventDefault()

    const formElements = Array.from(e.target.elements)
    const name = formElements.find(el => el.id === 'app-name').value
    const category = formElements.find(el => el.id === 'category').value
    const hasAndroid = formElements.find(el => el.id === 'platform-android')
      .checked
    const hasIos = formElements.find(el => el.id === 'platform-ios').checked
    const hasFacebook = formElements.find(el => el.id === 'platform-fb').checked
    const hasWebsite = formElements.find(el => el.id === 'platform-website')
      .checked
    const targetUrl = formElements.find(el => el.id === 'target-url').value
    const description = formElements.find(el => el.id === 'description').value

    const requestBody = {
      data: {
        type: 'resources',
        attributes: {
          name,
          category,
          target_url: targetUrl,
          draft_description: description,
          location,
          google_place_id: googlePlaceId,
          has_ios: hasIos,
          has_android: hasAndroid,
          has_facebook: hasFacebook,
          has_website: hasWebsite
        }
      }
    }

    const errors = checkValidation(requestBody.data.attributes)
    updateErrors(errors)
    if (errors.length) {
      return
    }
    sendRequest(e, requestBody, history)
  }

  return (
    <>
      <Header>Dodaj nowe źródło informacji</Header>
      <form onSubmit={onSubmitHandler}>

        <InputField
          name='app-name'
          onChange={() => setNameError()}
          error={nameError}
          label='Nazwa aplikacji'
        />
        <SelectField
          name='category'
          options={categories}
          label='Obszar działania'
        />
        <InputBox checkboxes>
          <CheckboxField
            name='platform-ios'
            label='iOS'
          />
          <CheckboxField
            name='platform-android'
            label='Android'
          />
          <CheckboxField
            name='platform-website'
            label='Strona'
          />
          <CheckboxField
            name='platform-fb'
            label='Fanpage'
          />
        </InputBox>
        <InputField
          name='target-url'
          onChange={() => setTargetUrlError()}
          error={targetUrlError}
          label='Link do strony internetowej'
        />
        <LocationField
          name='location'
          hasError={locationError}
          getLocation={getLocation}
          label='Lokalizacja'
        />
        <TextareaField
          name='description'
          onChange={() => setDescriptionError()}
          error={descriptionError}
          label='Krótki opis'
        />
        <SubmitButton>Wyślij</SubmitButton>
      </form>
    </>
  )
}

function ResourceAddedContent () {
  return (
    <ResultContentWrapper>
      <StyledThankYouIllustration />
      <Header>Dziękujemy za dodanie źródła</Header>
      <ResultContentDescription>
        Pracujemy nad sprawdzeniem informacji o przesłanej przez Ciebie
        inicjatywie. Opublikujemy ją, jak tylko zweryfikujemy, czy nic w niej
        nie brakuje.
      </ResultContentDescription>
      <SummaryButton to='/'>Zobacz inne inicjatywy</SummaryButton>
    </ResultContentWrapper>
  )
}

function ResourceAddingErrorContent () {
  return (
    <ResultContentWrapper>
      <Header>Przykro nam, ale wystąpił błąd</Header>
      {responseObj.status === 422 && (
        <>
          <p>Przesłany formularz zawiera następujące błędy:</p>
          <ul>
            {responseObj.errors.name.map(er => (
              <li>
                {er.error}
                {er.count && ` - ${er.count}`}
              </li>
            ))}
          </ul>
        </>
      )}
      <SummaryButton to='/dodaj-inicjatywe'>Spróbuj ponownie</SummaryButton>
    </ResultContentWrapper>
  )
}
