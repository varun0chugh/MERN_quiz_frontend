import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer'




export default function Main() {
    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
  
  
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <ol className='p-4 m-2 my-4 list-disc text-2xl  '>
            <li className='p-2 m-2'>You will be asked 10 questions one after another.</li>
            <li className='p-2 m-2'>10 points is awarded for the correct answer.</li>
            <li className='p-2 m-2'>Each question has three options. You can choose only one options.</li>
            <li className='p-2 m-2'>You can review and change answers before the quiz finish.</li>
            <li className='p-2 m-2'>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
        <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
  }

