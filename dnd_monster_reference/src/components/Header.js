import React from 'react'
import Search from './Search'

function Header(props) {
  return (
    <nav>
      <Search handleChange={props.handleChange}/>
      <h1 className='nodesto'>Dungeons & Dragons Monster Reference</h1>
    </nav>
  )
}

export default Header
