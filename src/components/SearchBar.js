import React from 'react';
import './css/SearchBar.css';

export default function SearchBar() {
  return (
    <div className='nav-bar'>
      <h1 className='nav-title'>Colour Generator</h1>
      <form action='/' method='get' className='search-form'>
        <label htmlFor='header-search'>
          <span className='sr-only'>Search blog posts</span>
        </label>
        <input
          className='search-input'
          type='text'
          id='header-search'
          placeholder='#000000'
          name='search'
        />
      </form>
    </div>
  );
}
