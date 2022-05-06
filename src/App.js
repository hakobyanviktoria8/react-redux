import './App.css';
import countReducer from "./redux/count"

function App() {  
  return (
    <div className="App">
      <h1>Redux</h1> 
      <div className='countWrapper'>
        <button>-</button>
        <p>0</p>
        <button>+</button>
      </div>
    </div>
  );
}

export default App;
