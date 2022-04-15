import './App.css';
const redux = require("redux")

function increment() {
  return {
      type: "INCREMENT"
  }
}

function decrement() {
  return {
      type: "DECREMENT"
  }
}

function double() {
  return {
      type: "DOUBLE"
  }
}

function halve() {
  return {
      type: "HALVE"
  }
}

function reducer(state = 0, action) {
  switch(action.type) {
      case "INCREMENT":
          return state + 1
      case "DECREMENT":
          return state - 1
      case "DOUBLE":
          return state * 2
      case "HALVE":
          return Math.round(state / 2)
      default:
          return state
  }
}

const store = redux.createStore(reducer)
console.log(store);
// dispatch / getState / replaceReducer / subscribe

store.subscribe(()=>{
  console.log(111,store.getState()) 
})

store.dispatch({type:"INCREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"DOUBLE"})
// or we can call function
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch({type:"CHKA"})






function App() {
  return (
    <div className="App">
      Redux
    </div>
  );
}

export default App;
