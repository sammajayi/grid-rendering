import { range } from './utils';

const gridStyles = {
  width: '80px',
  height: '80px',
  border: 'solid grey',
  borderRadius: '5px',
  padding: '20px',
  margin: '10px',
};

const rowStyle = {
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center'
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
