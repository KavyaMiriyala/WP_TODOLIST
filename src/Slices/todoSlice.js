import {createSlice} from '@reduxjs/toolkit'
export const todoSlice=createSlice({
    name:"todos",
    initialState:[...(JSON.parse(localStorage.getItem('myTodo')))],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
            localStorage.setItem('myTodo',JSON.stringify(state))
        },
        delTodo:(state,action)=>{
            const k=state.filter((todos,index) => index!==action.payload)
            localStorage.setItem('myTodo',JSON.stringify(k))
            return k
        },
      
    },
   
})

//get action creator functions
export const{addTodo} = todoSlice.actions
export const{delTodo} = todoSlice.actions
//export reducer
export default todoSlice.reducer;