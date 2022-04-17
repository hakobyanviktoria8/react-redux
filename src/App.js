import './App.css';
import store from './redux';
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount,upvoteVideo,downvoteVideo} from './redux/youTubeVideo';

// count function
store.dispatch(changeCount(23))


// favorite Things function
store.dispatch(addFavoriteThing("BlaBla"))
store.dispatch(removeFavoriteThing("BlaBla"))
store.dispatch(addFavoriteThing("Door bells"))
store.dispatch(addFavoriteThing("Sleigh bells"))
store.dispatch(removeFavoriteThing("Door bells"))

// youtube function
store.dispatch(setYouTubeTitle("New Title"))
store.dispatch(incrementViewCount())
store.dispatch(setYouTubeTitle("Learning Redux is Fun!"))
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())


function App() {
  return (
    <div className="App">
      <h1>Redux</h1> 
      <p> store getState count is a {store.getState().count}</p>
      {console.log(store.getState())}
    </div>
  );
}

export default App;
