import {createSlice} from "@reduxjs/toolkit";
import {movieApi} from "../../api/api";

const initialState = {
    items: [],
    isFetching: false,
    filterItems: [],
    category:null
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setItems(state, action) {
            return {
                ...state,
                items: action.payload
            }
        },
        toggleIsFetching(state, action) {
            return {
                ...state, isFetching: action.payload
            }
        },
        setCategory (state,action){
            return{
                ...state,
                category:action.payload
            }
        }
    }
})

export const {actions, reducer} = moviesSlice


export const fetchItems = () => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    await movieApi.getItems().then(data => {
        console.log(data)
        dispatch(actions.setItems(data))
        dispatch(actions.toggleIsFetching(false))
    })
}

export default reducer