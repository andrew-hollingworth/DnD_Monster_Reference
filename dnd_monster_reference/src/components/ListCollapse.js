import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Search from './Search'
import List from './List'
import NavLinks from './NavLinks'

function ListCollapse(props) {
  return (
  <>
    <Navbar defaultExpanded expand="sm" className='mobile'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand className='nodesto title'>Dungeons & Dragons Monster Reference</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavLinks />
          <Search
            handleChange={props.handleChange}/>
          <List
            handleClick={props.handleClick}
            monsterList={props.monsterList}
            value={props.value}/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  )
}

export default ListCollapse
