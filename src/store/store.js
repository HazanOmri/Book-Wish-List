import { createStore, combineReducers } from 'redux'
import { bookReducer } from './book.reducer.jsx'

const rootReducer = combineReducers({
    bookModule: bookReducer
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)


store.subscribe(() => {
    // console.log('storeState:\n', store.getState())
})



