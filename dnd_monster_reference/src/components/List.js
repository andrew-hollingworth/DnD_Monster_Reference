import React from 'react';
import { Link } from 'react-router-dom';

function List(props) {
  const matched = props.monsterList.filter((d, i) => {
    return d.name.toLowerCase().includes(props.value.toLowerCase());
  });

  let monsterList = matched.map((d, i) => {
    return <li key={i} ><Link to='/'><button className='eaves monster-button' onClick={() => props.handleClick(`http://www.dnd5eapi.co${d.url}`)}>{d.name}</button></Link></li>;
  });

  return (
    <React.Fragment>
      <div className='monsterList eaves'>
        <div>{monsterList}</div>
      </div>
    </React.Fragment>
  )
}

export default List;
