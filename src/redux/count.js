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

const initialState = {
    count: 0,
    favoriteThings: ["first"]
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
        default:
            return state.count
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