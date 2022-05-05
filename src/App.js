import './App.css';
import store from './redux';
import {changeCount, decrement, increment} from "./redux/count"

// count function
// store.dispatch(changeCount(23))
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())

function App() {
  return (
    <div className="App">
      <h1>Redux</h1> 
      <div className='countWrapper'>
        <button onClick={decrement}>-</button>
        <p>{store.getState().count}</p>
        <button onClick={increment}>+</button>
      </div>
      {/* {console.log("store.getStat ",store.getState())} */}
    </div>
  );
}

export default App;
