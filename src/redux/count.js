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

export default function countReducer(count = 0, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return count + action.payload
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}
