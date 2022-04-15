import './App.css';
const redux = require("redux")

// function increment(amount) {
//   return {
//       type: "INCREMENT",
//       payload: amount
//   }
// }

// function decrement(amount) {
//   return {
//       type: "DECREMENT",
//       payload: amount
//   }
// }
// function double() {
//   return {
//     type: "DOUBLE"
//   }
// }

// function halve() {
//   return {
//     type: "HALVE"
//   }
// }

function changeState(num = 1){
  return{
    type:"CHANGE_STATE",
    payload: num
  }
}

function addFavoriteThings (arr=[4,5,6]){
  return {
    type : "FAVORITE_THINGS",
    payload: arr
  }
}

function removeThings(thing){
  return {
    type: "REMOVE",
    payload: thing
  }
}

const initialState = {
  count: 0,
  favoriteThings: [1,2,3]
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        count : state.count+action.payload
      }
    case "FAVORITE_THINGS":
      return {
        ...state,
        favoriteThings: [...state.favoriteThings, "asd", ...action.payload]
      }
      case "REMOVE":
        return {
          ...state, 
          favoriteThings : state.favoriteThings.filter(x=>x!==action.payload)
        }
    default:
      return state
  }


  // switch(action.type) {
  //     case "INCREMENT":
  //         return {
  //           count:state.count + action.payload
  //         }
  //     case "DECREMENT":
  //         return {
  //           count: state.count - action.payload
  //         }
  //     case "DOUBLE":
  //       return {
  //         count: state.count * 2
  //       }
  //     case "HALVE":
  //         return {
  //           count: Math.round(state / 2)
  //         }
  //     default:
  //         return state
  // }
  
}

const store = redux.createStore(reducer)
// console.log(store);
// dispatch / getState / replaceReducer / subscribe

store.subscribe(()=>{
  console.log("store.subscribe",store.getState()) 
})

// if added paylod didn't working
// store.dispatch({type:"INCREMENT"})
// store.dispatch({type:"INCREMENT"})
// store.dispatch({type:"DOUBLE"})
// or we can call function
// store.dispatch(increment(99))
// store.dispatch(decrement(5))
// store.dispatch({type:"CHKA"})


// store.dispatch(changeState(9))
// store.dispatch(changeState(-909))
// store.dispatch(changeState(9909))
// store.dispatch(changeState())  //give default value
store.dispatch(changeState(9))

// work favorite action 
store.dispatch(addFavoriteThings())
store.dispatch(removeThings("asd"))













function App() {
  return (
    <div className="App">
      Redux
    </div>
  );
}

export default App;
