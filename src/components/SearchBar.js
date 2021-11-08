import React, { useState } from 'react';
import './css/SearchBar.css';

export default function SearchBar(props) {
  const [searchColourHex, setSearchColourHex] = useState('#');

  const searchChangeHandler = (event) => {
    setSearchColourHex(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    props.onSearchColour(searchColourHex);
  };

  return (
    <div className='nav-bar' style={{ backgroundColor: searchColourHex }}>
      <h1 className='nav-title'>Colour Generator</h1>
      <form className='search-form' onSubmit={searchHandler}>
        <label htmlFor='header-search'>
          <span className='sr-only'>Search blog posts</span>
        </label>
        <input
          className='search-input'
          type='text'
          id='search-input'
          placeholder='#000000'
          name='search'
          value={searchColourHex}
          onChange={searchChangeHandler}
        />
      </form>
    </div>
  );
}
