import ColourCard from './ColourCard';
import './css/ColourGrid.css';

export default function ColourGrid(props) {
  console.log(props.colourList);
  return (
    <div className='grid'>
      {props.colourList.map((colourObj) => (
        <ColourCard
          key={colourObj.percentage}
          hex={colourObj.hex}
          rgb={colourObj.rgb}
        />
      ))}
    </div>
  );
}
