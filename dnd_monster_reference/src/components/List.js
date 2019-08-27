import React from 'react'
import { Link } from 'react-router-dom'

function List(props) {
  let matched = props.monsterList.filter((d,i) => {
    return d.name.toLowerCase().includes(props.value.toLowerCase())
  })
  let monsterList = matched.map((d, i) => {
      return <li key={i} ><Link to='/'><button className= 'eaves button-gradient' onClick={() => props.handleClick(d.url)}>{d.name}</button></Link></li>
    })
  return(
    <div className='monsterList eaves'>
      <h2>Monster List</h2>
      {monsterList}
    </div>
  )}

export default List
