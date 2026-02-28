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

  return (
    <div className='h-screen w-screen bg-linear-to-r from-indigo-600 from-10% via-blue-700 via-30% to-blue-800 to-90%'>
        <nav>
          <button 
            className='text-white bg-blue-700 border-2 text-md font-bold pl-7 pr-7 pt-1 pb-1 ml-5 mt-5 rounded-4xl hover:cursor-pointer hover:bg-white hover:text-blue-700'
            onClick={() => {navigator({to:'/'})}}
            
            >
            Back
          </button>
        </nav>
        <div id='short-answer-qt' className='w-full h-full flex  flex-col space-y-10 justify-baseline items-center font-inconsolata'>
            <span className='bg-white h-1/2 p-10 mt-10 rounded-xl shadow-2xl space-y-3'>
                <h1 className='font-bold text-xl'>Question #1</h1>
                <h5 className='text-lg'>What does a pipeline (symbolized as '|') mean in Linux?</h5>
                <textarea className='w-full h-full overflow-hidden box-border border-2 border-black rounded-xl indent-1 text-md'></textarea>
            </span>
            <span id='mc-qt' className='bg-white p-10 h-fit  rounded-xl shadow-2xl space-y-3'>
                <h1 className='font-bold text-xl'>Question #2</h1>
                <h6 className='text-lg'>What does the keyboard shortcut ctrl + r do?</h6>
                <ol id='mc-options' className=''>
                  <li>Move the cursor to the end of the line</li>
                  <li>Allow the user to reverse search through their terminal history</li>
                  <li>Move the cursor to the start of the line</li>
                  <li>Re-runs the last command using sudo</li>
                </ol>
            </span>
        </div>
    </div>
  )
}
