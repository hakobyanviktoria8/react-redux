function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

function favoriteThingsReducer(favoriteThings = [], action) {
    switch(action.type) {
         case "ADD_FAVORITE_THING":
            return  [...favoriteThings, action.payload]
        case "REMOVE_FAVORITE_THING": {     
            return favoriteThings.filter(x=>x!==action.payload)
        }
        default:
            return favoriteThings
    }
}

