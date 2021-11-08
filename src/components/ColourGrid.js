import ColourCard from './ColourCard';
import './css/ColourGrid.css';

export default function ColourGrid(props) {
  return (
    <div className='grid'>
      {props.colourList.map((colourObj) => (
        <ColourCard
          key={colourObj.percentage}
          percentage={colourObj.percentage}
          hex={colourObj.hex}
          rgb={colourObj.rgb}
        />
      ))}
    </div>
  );
}
