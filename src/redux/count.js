const redux = require("redux")

export function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

export function increment() {
    return {
        type: "INCREMENT"
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

export function addFavoriteThing(things){
    return {
        type: "ADD_FAVORITE_THINGS",
        payload: things
    }
}
export function removeFavoriteThing(thing){
    return {
        type:"REMOVE_FAVORITE_THING",
        payload:thing
    }
}

function youtubeVideoAction(title) {
    return {
        type: "YOUTUBE_VIDEO_ACTION",
        payload: title
    }
}

const initialState = {
    count: 0,
    favoriteThings: ["first"],
    youtubeVideo: {
        title: "",
        viewCount: 0,
        votes: {
            up: 0,
            down: 0
        }
    }
}

export default function countReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count : state.count + action.payload
            }
        case "INCREMENT":
            return {
                ...state,
                count : state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count : state.count - 1
            }
        case "ADD_FAVORITE_THINGS":
            return {
                ...state,
                favoriteThings: [
                    ...state.favoriteThings,
                    action.payload
                ]
            }
        case "REMOVE_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: state.favoriteThings.filter(x=>x!==action.payload)
            }
        case  "YOUTUBE_VIDEO_ACTION": {
            return {
                ...state,
                youtubeVideo:  {
                    ...state.youtubeVideo,
                    title: action.payload,
                    votes: {
                        ...state.youtubeVideo.votes,
                        up: state.youtubeVideo.votes.up + 1
                    }
                }
            }
        }
        default:
            return state
    }
}

const store = redux.createStore(countReducer)
console.log("store",store); //store has dispatch, getState, replaceReducer, subscribe

store.subscribe(()=>{
    console.log("store.getState is Count ",store.getState())
})

store.dispatch(increment()) //1
store.dispatch(increment())  //2
store.dispatch(decrement()) //1
store.dispatch(changeCount(11)) //1+11
store.dispatch(addFavoriteThing("secund"))
store.dispatch(addFavoriteThing("third"))
store.dispatch(removeFavoriteThing("third"))
store.dispatch(youtubeVideoAction("Hello"))
