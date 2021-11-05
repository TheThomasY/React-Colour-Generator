import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ColourGrid from './components/ColourGrid';
import './App.css';

function App() {
  const [colourHex, setColourHex] = useState('');

  const showColourGrid = (searchColourHex) => {
    setColourHex(searchColourHex);     
  }
  


  return (
    <div className='App'>
      <SearchBar onSearchColour={showColourGrid}/>
      <ColourGrid colourHex={colourHex}/>
    </div>
  );
}

export default App;
