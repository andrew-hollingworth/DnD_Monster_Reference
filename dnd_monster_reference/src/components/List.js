import React from 'react'

function List(props) {
  let matched = props.monsterList.filter((d,i) => {
    return d.name.toLowerCase().includes(props.value.toLowerCase())
  })
  let monsterList = matched.map((d, i) => {
      return <li key={i} ><button className= 'eaves button-gradient' onClick={() => props.handleClick(d.url)}>{d.name}</button></li>
    })
  return(
    <div className='monsterList eaves'>
      <h2>Monster List</h2>
      {monsterList}
    </div>
  )}

export default List
