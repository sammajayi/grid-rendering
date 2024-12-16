import Grid from './Grid';

// solve the css, range utility and Grid component 

function App() {
  return (
    <div style={{justifyContent:'center', width:'60%'}}>
    <Grid 
      numRows={2}
      numCols={4}
    />
    </div>
  );
}

export default App;