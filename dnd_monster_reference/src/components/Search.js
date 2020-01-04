import React from 'react';

function Search(props) {
  return (
    <form className='search-box'>
      <i className="fas fa-search"> </i>
      <input
        type='text'
        placeholder='Search for a Monster'
        className='eaves search'
        onChange={props.handleChange}
      />
    </form>
  );
}

export default Search;
