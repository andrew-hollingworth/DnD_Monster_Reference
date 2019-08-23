import React from 'react'

function Search() {
  return (
    <form>
        <input
          type='text'
          placeholder='Type in a Monster'
          className='eaves'
          />
        <input
          type='submit'
          value='Monster' />
      </form>
  )
}

export default Search
