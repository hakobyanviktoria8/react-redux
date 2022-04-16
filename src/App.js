import './App.css';
const redux = require("redux")

function handleYouTubeTitle(title, view, votes){
  return{
      type:"YOUTOBE_TITLE",
      payload: {
       title, 
       view,
       votes
      }
  }
}

const initialState = {
  count: 0,
  favoriteThings: [1,2,3],
  youtubeVideo: {
    title: "",
    view: 0,
    votes: {
      up: 0,
      down: 0
    }
  }
}

function reducer(state = initialState, action) {
  switch(action.type) {
   
  
    case "YOUTOBE_TITLE":
          return {
              ...state,
              youtubeVideo: {
                ...state.youtubeVideo,
                title: action.payload.title,
                view: action.payload.view,
                votes: {
                  ...state.youtubeVideo.votes,
                  // up: action.payload.votes.up //or *****
                  up:  state.youtubeVideo.votes.up + 1
                }
              }
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
// store.dispatch(handleYouTubeTitle("One",10, {up:1}))  //see *****
store.dispatch(handleYouTubeTitle("One",10))












function App() {
  return (
    <div className="App">
      <h1>Redux</h1> 
      <p> store getState count is a {store.getState().count}</p>
      {/* {console.log("store is a __________",store.getState())} */}
    </div>
  );
}

export default App;
