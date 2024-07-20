import { configureStore,combineReducers } from "@reduxjs/toolkit";
import question_reducer from "./question_reducer";
import  resultReducer  from "./result_reducer";
const rootReducer=combineReducers({
    questions:question_reducer,
    result:resultReducer
    
})
export default configureStore({reducer:rootReducer});