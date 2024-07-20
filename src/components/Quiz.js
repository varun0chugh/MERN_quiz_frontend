import React, { useEffect ,useState} from 'react'
import Questions from './Questions'
import {  useDispatch, useSelector } from 'react-redux'
import { MoveNextQuestion } from '../hooks/FetchQuestion'
import { MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResults'
import { Navigate } from 'react-router-dom'


const Quiz = () => {
  const[check,setChecked]=useState(undefined)
  const result=useSelector(state=>state.result.result);
  //const trace=useSelector(state=>state.questions.trace)
  const {queue,trace}=useSelector(state=>state.questions)
  const dispatch=useDispatch()
  
 
  function onNext(){
    
    if(trace<queue.length){
      dispatch(MoveNextQuestion());
      if (result.length<=trace){
      dispatch(PushAnswer(check))}

    }
    setChecked(undefined)

  }
  function onPrev(){
    console.log('on prev click')
    if(trace>0){
      dispatch(MovePrevQuestion());
    }
    
  }
  function onChecked(check){
    console.log(check)
    setChecked(check)
  }
  if (result.length && result.length>=queue.length){
    return <Navigate to={'/result'}  replace={true}></Navigate>
  }
  return (
    <div className='container '>
      <h1 className='title text-light'>quiz Application</h1>
      <Questions onChecked={onChecked}></Questions>
      <div className='grid'>
        
      { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
        <button className=" btn next" onClick={onNext}>next</button>
      </div>
    </div>
  )
}

export default Quiz