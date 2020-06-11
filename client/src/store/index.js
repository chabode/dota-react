import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import heroReducer from './reducers/heroReducer'
import favouriteReducer from './reducers/favouriteReducer'


const reducer = combineReducers({
    heroReducer,
    favouriteReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store