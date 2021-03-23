import { createStore, combineReducers, applyMiddleware } from "redux"
import { autorization } from "../store/reducers/user/UserReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    autorization
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
