import React from 'react';

export default function ColourCard(props) {
  let textColour = props.percentage >= 0 ? '#ffffff' : '#000000';
  console.log(textColour);

  return (
    <div
      style={{ backgroundColor: props.rgb, color: textColour }}
      className='colour-card'
    >
      <h2 className='card-hex'>{props.hex}</h2>
      <h3 className='card-percentage'>{props.percentage}%</h3>
    </div>
  );
}
