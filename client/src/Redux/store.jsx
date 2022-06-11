import {createStore} from "redux"

import {userReducer} from "./LoginUser/Reducer"

export const store = createStore(
    userReducer
)