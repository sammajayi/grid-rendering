import { range } from './utils';

const gridStyles = {
  width: '100px',
  height: '100px',
  border: 'solid grey',
  borderRadius: '5px',
};

const rowStyle = {
  display: 'flex',
}

function Grid({ numRows, numCols }) {
  return (
    <div style={{display:'flex', gap:'5px', alignItems: 'center', justifyContent: 'center'}} className="grid">
      {range(numRows).map((row) => (
        <div key={row} style={rowStyle}>
        {range(numCols).map((col) => (
          <div key={col} style={gridStyles} ></div>
         
        ))}
         </div>
      ))}
    </div>
  );
}

export default Grid;
