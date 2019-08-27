import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <nav>
      <Search handleChange={props.handleChange}/>
      <h1 className='nodesto title'>Dungeons & Dragons Monster Reference</h1>
      <h4><Link className='eaves' to='/about'>About</Link></h4>
    </nav>
  )
}

export default Header
