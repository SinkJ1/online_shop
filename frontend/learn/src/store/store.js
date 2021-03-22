import { createStore, combineReducers } from "redux"
import { Autorization } from "../store/reducers/user/UserReducer"

const rootReducer = combineReducers({
    Autorization
})

export const store = createStore(rootReducer)
