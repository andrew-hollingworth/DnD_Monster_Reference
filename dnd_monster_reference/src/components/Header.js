import React from 'react'
import Search from './Search'

function Header() {
  return (
    <nav>
      <Search />
      <h1 className='nodesto'>Dungeons & Dragons Monster Reference</h1>
    </nav>
  )
}

export default Header
