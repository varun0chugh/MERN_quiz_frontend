import React,{useEffect, useState} from 'react'

import FetchQuestion from '../hooks/FetchQuestion'
import { useSelector,useDispatch } from 'react-redux'
import { updateResultAction } from '../redux/result_reducer'
import { updateResult } from '../hooks/setResults'


export default function Questions ({onChecked}) {
    const[checked,setChecked]=useState(undefined)
    const [{isLoading,apiData,serverError}]=FetchQuestion()
    const {trace}=useSelector(state=>state.questions);
    const dispatch=useDispatch()
    const result = useSelector(state => state.result.result);
    
    const questions=useSelector(state=>state.questions.queue[state.questions.trace]);
    
    useEffect(()=>{
      
      dispatch(updateResultAction({trace,checked}));
    
       
    },[checked])
    function onSelect(i){                                       
        
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked}))
        

    }
    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>
  return (
    <div className='questions '>
        <h2 className='text-light text-2xl p-3 m-2 '> {questions?.question}</h2>
        <ul key={questions?.id}>
           {
            questions?.options.map((q,i)=>(
                <li key={i}>
                    <input type="radio" value={false} name="options" id={`q${i}-option`} onChange={()=>onSelect(i)} />
                    <label htmlFor={`q${i}-option`} className='text-primary'>{q}</label>
                    <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                </li>
            ))
           }
        </ul>
    </div>
  )
}

