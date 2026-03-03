import React, { useState } from 'react'
import './Quiz.css'
import { data } from './data'

const Quiz = () => {
    let [index, setIndex] = useState(1)
    let [question, setQuestion] = useState(data[index]);

    const checkAnswers = (e, ans) => {
    if(question.ans === ans){
        e.target.classList.add("correct")
    }
    else{
        e.target.classList.add("incorrect")
    }
    }
  return (
    <div className='container'>
    <h1>A Quiz App</h1>
    <hr />
    <h2>{index+1}. {question.question}</h2>
    <ul>
    <li onClick={(e)=>{checkAnswers(e,1)}}>{question.option1}</li>
    <li onClick={(e)=>{checkAnswers(e,2)}}>{question.option2}</li>
    <li onClick={(e)=>{checkAnswers(e,3)}}>{question.option3}</li>
    <li onClick={(e)=>{checkAnswers(e,4)}}>{question.option4}</li>
    </ul>
    <button>Next</button>
    <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz