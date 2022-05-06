export function setUser(user) {
    return {
        type: "SET_USER",
        payload: user
    }
}

export function deleteUser() {
    return {
        type: "DELETE_USER",
    }
}

const initialState = {
    firstName: "",
    lastName: "",
    id: "",
    email: ""
}

export default function setUserReducer(user = initialState, action){
    switch (action.type) {
        case "SET_USER":
           return {
            ...user,
            ...action.payload
        }
        case "DELETE_USER":
           return user = {}
        default:
            return user
    }
}