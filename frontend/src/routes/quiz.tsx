import './styles.css'
import { createFileRoute } from '@tanstack/react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/quiz')({
  component: RouteComponent,
})

function RouteComponent() {

  const navigator = useNavigate();
  const [answers, setAnswers] = useState({});

  type Questions = {
    questionNumber: number,
    question: string, 
    q1: string, 
    q2: string, 
    q3: string, 
    q4: string
  }

  function mcTemplate(questions: Questions) {
    const [ans, setAns] = useState('');
    function finalAns(s: string) {
      setAns(s);
      console.log(`User choose answer: ${s}`);
    }
    return (
      <div className='flex flex-col bg-white p-10 h-fit  rounded-xl shadow-2xl space-y-3'>
        <h1 className='font-bold text-xl'>Question #{questions.questionNumber}</h1>
        <h6 className='text-md'>What does the keyboard shortcut ctrl + r do?</h6>
        <div className='flex flex-col space-y-1'>
          <label>
            <input type='radio' name='mc' onClick={() => {finalAns(questions.q1)}}></input>
            {questions.q1}
          </label>
          <label>
            <input type='radio' name='mc' onClick={() => {finalAns(questions.q2)}}></input>
            {questions.q2}
          </label>
          <label>
            <input type='radio' name='mc' onClick={() => {finalAns(questions.q3)}}></input>
            {questions.q3}
          </label>
          <label>
            <input type='radio' name='mc' onClick={() => {finalAns(questions.q3)}}></input>
            {questions.q4}
          </label>
        </div>
      </div>

    )
  }

  return (
    <div className='h-full w-screen bg-linear-to-r from-indigo-600 from-10% via-blue-700 via-30% to-blue-800 to-90%'>
        <nav>
          <button 
            className='text-white bg-blue-700 border-2 text-md font-bold pl-7 pr-7 pt-1 pb-1 ml-5 mt-5 rounded-4xl hover:cursor-pointer hover:bg-white hover:text-blue-700'
            onClick={() => {navigator({to:'/'})}}
            
            >
            Back
          </button>
        </nav>
        <div id='short-answer-qt' className='w-full h-full flex  flex-col space-y-10 justify-baseline items-center font-inconsolata'>
          <div className='bg-white h-1/2 p-10 mt-10 rounded-xl shadow-2xl space-y-3'>
            <h1 className='font-bold text-xl'>Question #1</h1>
            <h5 className='text-lg'>What does a pipeline (symbolized as '|') mean in Linux?</h5>
            <textarea className='w-full box-border h-80 overflow-auto  border-2 border-black rounded-xl indent-1 text-md'></textarea>
          </div>
                {mcTemplate({
                  questionNumber: 2,
                  question: "In the terminal, what does the shortcut crtl + r do?",
                  q1: "Re-run the last command with Sudo.",
                  q2: "Allow you to reverse search through the terminal history.",
                  q3: "Move the cursor to the start of the line.",
                  q4: "Move the cursor to the end of the line."
                })}
                {mcTemplate({
                  questionNumber: 3,
                  question: "In the terminal, what does the shortcut crtl + r do?",
                  q1: "Re-run the last command with Sudo.",
                  q2: "Allow you to reverse search through the terminal history.",
                  q3: "Move the cursor to the start of the line.",
                  q4: "Move the cursor to the end of the line."
                })}
            <button className='text-blue-700 bg-white border-2 text-md font-bold pl-7 pr-7 pt-1 pb-1 mt-3 mb-3 rounded-4xl hover:cursor-pointer hover:bg-blue-700 hover:text-white'>
              Submit
            </button>
            </div>
        </div>
  )
}
