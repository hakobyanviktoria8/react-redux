import './App.css';
const redux = require("redux")

function increment(amount) {
  return {
      type: "INCREMENT",
      payload: amount
  }
}

function decrement(amount) {
  return {
      type: "DECREMENT",
      payload: amount
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

function reducer(state = {count:0}, action) {
  switch(action.type) {
      case "INCREMENT":
          return {
            count:state.count + action.payload
          }
      case "DECREMENT":
          return {
            count: state.count - action.payload
          }
      case "DOUBLE":
        return {
          count: state.count * 2
        }
      case "HALVE":
          return {
            count: Math.round(state / 2)
          }
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

// if added paylod didn't working
// store.dispatch({type:"INCREMENT"})
// store.dispatch({type:"INCREMENT"})
// store.dispatch({type:"DOUBLE"})
// or we can call function
store.dispatch(increment(99))
store.dispatch(decrement(5))
store.dispatch({type:"CHKA"})






function App() {
  return (
    <div className="App">
      Redux
    </div>
  );
}

export default App;
