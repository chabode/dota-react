import { createStore } from 'redux'

const defaultState = {
    favList: [
        
    ]
}

const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'ADD_FAVLIST':
            return {
                ...state,
                favList: state.favList.concat(action.newFavList)
            }
    
        default:
            return state
    }
}

const store = createStore(reducer)

export default store