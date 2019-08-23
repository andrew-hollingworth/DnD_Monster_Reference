import React from 'react'

function Info(props) {
    console.log('info props', props)
    return (
      <React.Fragment>
        <h3 className='eaves'>This is Info</h3>
        <h2 className='eaves'>Hi</h2>
      </React.Fragment>
    )
  }

export default Info
