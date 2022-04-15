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



function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
