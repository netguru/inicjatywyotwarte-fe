import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
  text-align: center;
  margin: 4em;
`

export default function Loader () {
  return <StyledLoader>Ładowanie...</ StyledLoader>
}
