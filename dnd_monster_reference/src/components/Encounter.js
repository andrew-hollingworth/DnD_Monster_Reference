import React from 'react'

function Encounter(props) {
  let encounterList = props.encounter.map((d, i) => {
      return <li key={i} >{d.name}</li>
    })
  return (
    <div className='info-container'>
      <h1 className='eaves'>Encounters (alpha--to come)</h1>
      {encounterList}
    </div>
  )
}

export default Encounter
