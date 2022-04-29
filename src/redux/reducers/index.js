import {combineReducers} from "redux";
import reducer from "./moviesReducer";

const rootReducers = combineReducers({
    movies:reducer,
})

export default rootReducers;