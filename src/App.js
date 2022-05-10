import './App.css';
import {changeCount, increment, decrement} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from './redux/favoriteThings';
import { deleteUser, setUser } from './redux/user';
import { incrementViewCount, setYouTubeTitle, upvoteVideo } from './redux/youTubeVideo';
// store import enq anum Redux indexi root Reduceric
import store from './redux';
import {useSelector, useDispatch} from "react-redux"

// HOCa connect(What parts of STATE do you want, What actions to dispatch)(Component)
import { connect } from 'react-redux';
import { useState } from 'react';

function App(props) {  
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const[favoriteThing, setFavoriteThing]=useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target.value)
    props.addFavoriteThing(favoriteThing)
  }

  return (
    <div className="App">
      <h1>Redux</h1> 
      <hr/>
      <h2>Action and Reducedr count.js file</h2>
      <div className='countWrapper'>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <h3>{count}</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <hr/>
      <div>
        <h2>Add Favorite Things favoriteThings.js file</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Add Favorite Thing' onChange={e=>setFavoriteThing(e.target.value)}/>
          <input type="submit"/>
        </form>
        <div>
          {
            props.favoriteThings?.map((item, idx)=>
              <p key={idx}>{item}</p>
            )
          }
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) =>{
//   console.log(state);
//   return {
//     count : state.count,
//     favoriteThings: state.favoriteThings
//   }
// }

// const mapDispatchToProps ={
//   increment,
//   decrement,
//   changeCount,
//   addFavoriteThing,
//   removeFavoriteThing,
// }
// connect(mapStateToProps, mapDispatchToProps)(App)
export default App
