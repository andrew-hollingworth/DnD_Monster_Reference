import React from 'react'
import Search from './Search'
import NavLinks from './NavLinks'
import List from './List'

function Desktop(props) {
  return (
    <div className='desktop'>
      <h1 className='nodesto title'>Dungeons & Dragons Monster Reference</h1>
      <NavLinks />
      <Search
        handleChange={props.handleChange}/>
      <List
        handleClick={props.handleClick}
        monsterList={props.monsterList}
        value={props.value}/>
    </div>
  )
}

export default Desktop
