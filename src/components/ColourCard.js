import React, { useState } from 'react';

export default function ColourCard(props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(props.hex);
    setCopied(true);

    setTimeout(function () {
      setCopied(false);
    }, 1500);
  };

  let textColour = props.percentage >= 0 ? '#ffffff' : '#000000';

  let copiedPopup = copied ? '1' : '0';

  return (
    <div
      style={{ backgroundColor: props.rgb, color: textColour }}
      className='colour-card'
    >
      <h2 className='card-hex' onClick={copyToClipboardHandler}>
        {props.hex}
      </h2>
      <h3 className='card-percentage'>{props.percentage}%</h3>
      <div style={{ opacity: copiedPopup }} className='copy-popup'>
        Copied to clipboard
      </div>
    </div>
  );
}
