const defaultState = {
    favList: []
}

export default function favouriteReducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_FAVLIST':
            return {
                ...state,
                favList: state.favList.concat(action.payload)
            }
        default:
            return state
    }
}