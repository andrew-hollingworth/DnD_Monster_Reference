import React from 'react'

function Search(props) {
  return (
    <form>
        <input
          type='text'
          placeholder='Search'
          className='eaves search'
          onChange={props.handleChange}
          />
      </form>
  )
}

export default Search
