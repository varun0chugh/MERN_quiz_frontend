import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import * as Action from '../redux/question_reducer'
import { getServerData } from '../components/helper/helper';

const FetchQuestion = () => {
    const dispatch=useDispatch();
    const [getData,setGetData]=useState({isLoading:false,apiData:[],serverError:null})
    useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}));
        (async()=>{
            try {
                
                const [{questions,answers}]= await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data)=>data)
                console.log({questions,answers})

                if (questions.length>0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:questions}));
                    dispatch(Action.startExamAction({question:questions,answers}))
                }else{
                    throw new Error('no question available')
                }
                
            } catch (error) {
                setGetData(prev=>({...prev,isLoading:false}));
                setGetData(prev=>({...prev,serverError:error}));
                
            }
        })();
    },[dispatch])
  return [getData,setGetData];
}
export const MoveNextQuestion=()=> async(dispatch)=>{
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
        
    }
}
export const MovePrevQuestion=()=> async(dispatch)=>{
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
        
    }
}

export default FetchQuestion