import './App.css';
import countReducer, {changeCount, decrement, increment} from "./redux/count"

const redux = require("redux")
const store = redux.createStore(countReducer)

store.subscribe(()=>{
    console.log("store.getState is App ", store.getState())
})

// count function
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(changeCount(23))

function App() {
  
  return (
    <div className="App">
      <h1>Redux</h1> 
      <div className='countWrapper'>
        <button onClick={decrement}>-</button>
        <p>{store.getState()}</p>
        <button onClick={increment}>+</button>
      </div>
      {/* {console.log("store.getStat ",store.getState())} */}
    </div>
  );
}

export default App;
