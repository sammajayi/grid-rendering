import Grid from './Grid';

// solve the css, range utility and Grid component 

function App() {
  return (
    <div style={{width: '50%', justifyContent: 'center', alignItems: 'center', margin: '20px auto'}}>
    <Grid 
      numRows={2}
      numCols={4}
    />
    </div>
  );
}

export default App;