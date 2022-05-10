import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import './App.css';
import {increment, decrement} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from './redux/favoriteThings';
import { incrementViewCount, setYouTubeTitle } from './redux/youTubeVideo';
import { deleteUser, setUser } from './redux/user';


function App() {  
  const[favoriteThing, setFavoriteThing]=useState("")
  const count = useSelector(state => state.count)
  const favoriteThingsArr = useSelector(state => state.favoriteThings)
  const youTubeVideo = useSelector(state => state.youTubeVideo)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {    
    dispatch(setYouTubeTitle("YouTube Title Here"))
    dispatch(incrementViewCount())
    dispatch(setUser({
      firstName: "Viktorya",
      lastName: "Hakobyan",
      id: "1",
      email: "viki@gmail.com"
    }))
  }, [])
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addFavoriteThing(favoriteThing))
    setFavoriteThing("")
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
          <input type="text" value={favoriteThing} placeholder='Add Favorite Thing' onChange={e=>setFavoriteThing(e.target.value)}/>
          <input type="submit"/>
        </form>
        <div>
          {
            favoriteThingsArr?.map((item, idx)=>
              <p key={idx}>{item}
                <button onClick={()=>dispatch(removeFavoriteThing(favoriteThingsArr[idx]))}>Del</button>
              </p>
            )
          }
        </div>
      </div>
      <hr/>
      <div>
        <h2>Add youTube Video youTubeVideo.js file</h2>
        <h3>{youTubeVideo.title}</h3>
        <p>View Count{youTubeVideo.viewCount}</p>
        {/* {console.log("youTubeVideo", youTubeVideo)} */}
      </div>
      <hr/>
      <h2>Add user user.js file</h2>
      <span>{user.id}. {user.firstName} {user.lastName}</span>
      <p>{user.email}</p>
      {console.log(user)}
    </div>
  );
}

export default App
