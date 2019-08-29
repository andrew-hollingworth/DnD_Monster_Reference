import React from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {
  return (
    <div className='zatanna pages-nav'>
      <Link className='nav-h4' to='/about'>About</Link>
      <Link className='nav-h4' to='/encounter'>Encounter Builder (alpha)</Link>
    </div>
  )
}

export default NavLinks
