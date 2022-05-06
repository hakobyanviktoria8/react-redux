import './App.css';
import countReducer, {changeCount, decrement, increment} from "./redux/count"

// const redux = require("redux")
// const store = redux.createStore(countReducer)

// store.subscribe(()=>{
//     console.log("store.getState is App ", store.getState())
// })

// // count function
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(changeCount(23))

function App() {
  
  return (
    <div className="App">
      <h1>Redux</h1> 
      <div className='countWrapper'>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default App;
