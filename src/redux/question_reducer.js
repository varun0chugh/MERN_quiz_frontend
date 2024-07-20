import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const question_reducer = createSlice({
    name:'questions',
    initialState:{
        queue:[],
        answers:[],
        trace:0
    },
    reducers:{
        startExamAction:(state,action)=>{
            let { question, answers} = action.payload
            return {
                ...state,
                queue : question,
                answers
            }
        },
        moveNextAction:(state)=>{
            return{
                ...state,
                trace:state.trace+1
            }
        },
        movePrevAction:(state)=>{
            return{
                ...state,
                trace:state.trace-1
            }
        },
        resetAllAction : () => {
            return {
                queue:[],
                answers:[],
                trace:0
            }
        }
    }
}) 
export const{startExamAction,moveNextAction,movePrevAction,resetAllAction}= question_reducer.actions;
export default question_reducer.reducer;
