import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <nav>
      <Search handleChange={props.handleChange}/>
      <h1 className='eaves title'>Dungeons & Dragons<br/>Monster Reference</h1>
      <h4><Link to='/about'>About This Tool</Link></h4>
    </nav>
  )
}

export default Header
