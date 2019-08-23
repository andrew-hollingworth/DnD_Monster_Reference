import React from 'react'
import Info from './Info'
import List from './List'

function Main() {
  return (
    <React.Fragment>
      <p className='scaly'> This is the main section</p>
      <List />
      <Info />
    </React.Fragment>
  )
}

export default Main
