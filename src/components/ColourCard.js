import React from 'react';

export default function ColourCard(props) {
  return (
    <div style={{ backgroundColor: props.rgb }} className='colour-card'>
      <h2>{props.hex}</h2>
    </div>
  );
}
