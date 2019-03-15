import * as React from 'react'

export const Disabled = ({name}) => (
  <>
    <h1 className='display-4'>Disabled ✋</h1>
    <hr />
    <p className='lead'>
      The feature <strong>{name}</strong> is not visible for this user
    </p>
  </>
)
