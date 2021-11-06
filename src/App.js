import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ColourGrid from './components/ColourGrid';
import './App.css';




function App() {
  const [colourList, setColourList] = useState([]);

  function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
    // 3 digits
    if (h.length === 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
    // 6 digits
    } else if (h.length === 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    return "rgb("+ +r + "," + +g + "," + +b + ")";
  }

  function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

  const showColourGrid = (searchColourHex) => {
    setColourList([]);
    const searchRGB = hexToRGB(searchColourHex); 

    let sep = searchRGB.indexOf(",") > -1 ? "," : " ";
    let rgbArr = searchRGB.substr(4).split(")")[0].split(sep);
    let rgbDiff = [255-rgbArr[0],255-rgbArr[1],255-rgbArr[2]];
    console.log('rgbArr', rgbArr);
    console.log('rgbDiff',rgbDiff);
    let r = 0;
    let g = 0;
    let b = 0;

    for (let i=0; i<21; i++) {

      let percentage = i<10 ? '-' + (100-i*10).toString() + '%' : ((i-10)*10).toString() + '%';
    

      if (i<10) {
        r = Math.round(255 - (rgbDiff[0]/10)*i);
        g = Math.round(255 - (rgbDiff[1]/10)*i);
        b = Math.round(255 - (rgbDiff[2]/10)*i);
      } else {
        r = Math.round(rgbArr[0] - (rgbArr[0]/10)*(i-10) );
        g = Math.round(rgbArr[1] - (rgbArr[1]/10)*(i-10) );
        b = Math.round(rgbArr[2] - (rgbArr[2]/10)*(i-10) );
      }

      let rgbRange = "rgb("+ +r + "," + +g + "," + +b + ")";

      setColourList((prevColourList) => {
        return [
          {
            percentage: percentage,
            hex: RGBToHex(rgbRange),
            rgb: rgbRange
          },
          ...prevColourList
        ]
      })
    }

    console.log(colourList);
  }
  


  return (
    <div className='App'>
      <SearchBar onSearchColour={showColourGrid}/>
      <ColourGrid colourHex={colourList}/>
    </div>
  );
}

export default App;
