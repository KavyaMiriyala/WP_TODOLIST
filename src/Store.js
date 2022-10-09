import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './Slices/todoSlice'
export const store=configureStore({
    // component can access the state using useSelector of react-redux
    reducer:{
        todos:todoReducer,
    }
})



