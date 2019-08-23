import React from 'react'

function Info(props) {
    return (
      <React.Fragment>
        <h1 className='eaves'>{props.activeMonster.name}</h1>
      </React.Fragment>
    )
  }

export default Info
