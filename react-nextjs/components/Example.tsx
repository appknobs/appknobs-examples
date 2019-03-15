import * as React from 'react'

export const Example = ({name}) => (
  <>
    <h1 className='display-4'>Enabled 👌</h1>
    <hr />
    <p className='lead'>
      The feature <strong>{name}</strong> is visible for this user
    </p>
  </>
)
