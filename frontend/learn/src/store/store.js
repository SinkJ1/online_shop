import { createStore, combineReducers } from "redux"
import { autorization } from "../store/reducers/user/UserReducer"

const rootReducer = combineReducers({
    autorization
})

export const store = createStore(rootReducer)
