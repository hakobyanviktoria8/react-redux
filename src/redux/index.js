import countReducer from "./count"
import favoriteThingsReducer from "./favoriteThings"
import setUserReducer from "./user"
import youTubeVideoReducer from "./youTubeVideo"
const redux = require("redux")
const {combineReducers, createStore} = redux

// combineReducers give initial state object {count,favoriteThings,.......}
const rootReducer = combineReducers({
    count: countReducer,
    favoriteThings: favoriteThingsReducer,
    youTubeVideo: youTubeVideoReducer,
    user: setUserReducer,
})

// create store and subscribe state
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log("rootReducer", store.getState())
})
export default store