const defaultState = {
    heroList: []
}

export default function heroReducer( state = defaultState, action ) {
    switch (action.type) {
        case "SET_HEROES":
            return {
                ...state,
                heroList: action.payload
            }
        default:
            return state
    }
}