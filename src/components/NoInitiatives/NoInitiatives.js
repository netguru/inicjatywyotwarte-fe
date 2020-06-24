import React from 'react'
import NewButton from 'components/Buttons/NewButton/NewButton'

import './NoInitiatives.css'

export default function NoInitiatives () {
  return (
    <div className='no-initiatives'>
      <p>
        Żadna inicjatywa nie została jeszcze dodana.
        <br />
        Kliknij poniżej, aby dodać swoją
      </p>
      <NewButton />
    </div>
  )
}
