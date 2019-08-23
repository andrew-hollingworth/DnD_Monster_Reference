import React from 'react'

function Search(props) {
  console.log('search props', props);
  return (
    <form>
        <input
          type='text'
          placeholder='Type in a Monster'
          className='eaves'
          onChange={props.handleChange}
          />
      </form>
  )
}

export default Search
