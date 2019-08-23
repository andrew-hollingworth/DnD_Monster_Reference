import React from 'react'

function List(props) {
  let matched = props.monsterList.filter((d,i) => {
    return d.name.toLowerCase().includes(props.value.toLowerCase())
  })
  console.log('this is matched', matched);
  let monsterList = matched.map((d, i) => {
      return <li key={i} ><button onClick={() => props.handleClick(d.url)}>{d.name}</button></li>
    })
  return(
    <div className='monsterList'>
      <h2 className='scaly-b-i'>Monster List</h2>
      {monsterList}
    </div>
  )}

export default List
