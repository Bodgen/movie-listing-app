import {configureStore} from '@reduxjs/toolkit'
import rootReducers from "./reducers";
import thunk from "redux-thunk";


export const store = configureStore({
    reducer: rootReducers,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production'
})