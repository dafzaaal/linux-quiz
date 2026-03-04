import './styles.css'
import { createFileRoute } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import RobotSVG from './robot-icon.svg';
import { motion } from "framer-motion";

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

  type shortAnsQuestion = {
    questionNumber: number, 
    question: string
  }

  function shortAnsTemplate(props: shortAnsQuestion) {
    return (
      <div className='bg-white w-[30%] h-1/2 p-10 mt-10 mb-10 rounded-xl shadow-2xl space-y-3 font-inconsolata'>
        <h1 className='font-bold text-xl'>Question #{props.questionNumber}</h1>
        <h5 className='text-md'>{props.question}</h5>
        <textarea className='w-full box-border h-80 overflow-auto  border-2 border-black rounded-xl indent-1 text-md'></textarea>
      </div>
    )
  }

  function mcTemplate(questions: Questions) {
    const [ans, setAns] = useState('');
    const [showChats, setShowChats] = useState(false);
    function finalAns(s: string) {
      setAns(s);
      console.log(`User choose answer: ${s}`);
    }
    return (
      <div className='flex flex-col bg-white p-10 h-fit  rounded-xl shadow-2xl space-y-3'>
        <h1 className='font-bold text-xl'>Question #{questions.questionNumber}</h1>
        <h6 className='text-md'>{questions.question}</h6>
        <div className='flex flex-col space-y-1'>
          <label>
            <input type='radio' name={"mc-" + questions.questionNumber} onClick={() => {finalAns(questions.q1)}}></input>
            {questions.q1}
          </label>
          <label>
            <input type='radio' name={"mc-" + questions.questionNumber} onClick={() => {finalAns(questions.q2)}}></input>
            {questions.q2}
          </label>
          <label>
            <input type='radio' name={"mc-" + questions.questionNumber} onClick={() => {finalAns(questions.q3)}}></input>
            {questions.q3}
          </label>
          <label>
            <input type='radio' name={"mc-" + questions.questionNumber} onClick={() => {finalAns(questions.q3)}}></input>
            {questions.q4}
          </label>
        </div>
      </div>

    )
  }

  function openChat() {
    const chatDOMElement = document.getElementById('chat-box');
    if (chatDOMElement) {
      chatDOMElement.style.display = "visible";
    }
  }

  return (
    <div className='h-full w-1/1 bg-linear-to-r from-indigo-600 from-10% via-blue-700 via-30% to-blue-800 to-90%'>
      
      <div id='page'>
        <div className='flex flex-row justify-between items-center'>
          <button 
            className='text-white bg-blue-700 border-2 text-md font-bold pl-7 pr-7 pt-1 pb-1 ml-5 mt-5 rounded-4xl hover:cursor-pointer hover:bg-white hover:text-blue-700'
            onClick={() => {navigator({to:'/'})}}
            >
            Back
          </button>
          <img 
            src={RobotSVG} 
            className='size-20 p-3 shadow-none bg-white rounded-full mr-10 mt-7 hover:cursor-pointer hover:shadow-2xl'
            onClick={openChat}
            />

        </div>

        <div className='flex flex-col justify-center items-center'>
          {shortAnsTemplate({
            questionNumber: 1,
            question: "In Linux what does the character '|' typically mean?"
          })}
          <div id='short-answer-qt' className='w-full h-full flex  flex-col space-y-10 justify-baseline items-center font-inconsolata'>
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
                  {shortAnsTemplate({
                    questionNumber: 4,
                    question: "What does the 'bin' folder in the Linux home directory contain?"
                  })}
                  {mcTemplate({
                    questionNumber: 5,
                    question: "Which of the following statements is true about the 'etc' folder.",
                    q1: "It contains user data, information such as usernames, passwords, etc.",
                    q2: "It contains pure functions and utilities that don't have any side effects.",
                    q3: "It contains all applications currently installed on the device.",
                    q4: "It contains shared files that are essential components for the OS"
                  })}
              <button className='text-blue-700 bg-white border-2 text-md font-bold pl-7 pr-7 pt-1 pb-1 mt-3 mb-3 rounded-4xl hover:cursor-pointer hover:bg-blue-700 hover:text-white'>
                Submit
              </button>
              </div>
              </div>
            </div>
        </div>
  )
}
