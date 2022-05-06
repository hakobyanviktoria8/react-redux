import './App.css';
import {changeCount, increment, decrement} from "./redux/count"
import {addFavoriteThing} from './redux/favoriteThings';
import { deleteUser, setUser } from './redux/user';
import { incrementViewCount, setYouTubeTitle, upvoteVideo } from './redux/youTubeVideo';
// store import enq anum Redux indexic
import store from './redux';
// HOCa connect(What parts of STATE do you want, What actions to dispatch)(Component)
import { connect } from 'react-redux';

store.dispatch(changeCount(20))   //20
store.dispatch(increment())   //21
store.dispatch(increment())   //22
store.dispatch(decrement())   //21
store.dispatch(addFavoriteThing("flowers")) // ['flowers']
store.dispatch(setYouTubeTitle("First"))   //{title: 'First', viewCount: 0, votes: {up: 0, down: 0}}
store.dispatch(incrementViewCount())   //{title: 'First', viewCount: 1, votes: {up: 0, down: 0}}
store.dispatch(upvoteVideo())   //{title: 'First', viewCount: 1, votes: {up: 1, down: 0}}
// add and delete user (action and reducer find redux/user)
store.dispatch(setUser({ firstName: "asas", lastName: "sasas", id: "sasaa", email: "saasa@asa.sa" }))  
store.dispatch(setUser({ firstName: "Viktorya" }))   
store.dispatch(deleteUser())   

function App({count}) {  
  console.log("store ",store);

  return (
    <div className="App">
      <h1>Redux</h1> 
      <hr/>
      <h2>Action and Reducedr count.js file</h2>
      <div className='countWrapper'>
        <button>-</button>
        <p>{count}</p>
        <button>+</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    count : state.count
  }
}

// connect(mapStateToProps, mapDispatchToProps)(App)
export default connect(mapStateToProps, {})(App)
