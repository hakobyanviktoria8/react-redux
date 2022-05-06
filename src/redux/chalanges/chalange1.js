import redux, {createStore} from "redux"

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

 function countReducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}

const store = createStore(countReducer)

store.subscribe(()=> console.log(store.getState()))

store.dispatch(increment())

export default store