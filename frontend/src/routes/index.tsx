import '../styles.css';
import { createFileRoute } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const Route = createFileRoute('/')({ component: App })


function App() {

  function icon(url: string, iconType: any) {
    return (
      <a href={url} target='_blank'>
        <FontAwesomeIcon 
          icon={iconType}
          size='2xl'
          className='hover:cursor-pointer'
          />
      </a>
    )
  }

  const navigate = useNavigate();

  return (
    <div>
      <div id='header' className='flex w-fit absolute p-3 pr-4 text-white bg-black rounded-br-3xl rounded-tr-3xl'>
        {icon('https://github.com/dafzaaal', faGithub)}
        {icon('https://www.linkedin.com/in/dawood-afzaal-36933b1a5/', faLinkedin)}
      </div>
      <div className='w-screen h-screen flex flex-row justify-center bg-linear-to-r from-indigo-600 from-10% via-blue-700 via-30% to-blue-800 to-90%'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full text-center flex flex-col justify-center items-center'>
            <span id='title-span' className='flex flex-col'>
              <h1 className='font-consolas font-extrabold text-white text-8xl text-shadow-xl'>Practice</h1>
                <h1 className='font-consolas font-extrabold text-white text-9xl text-shadow-xl'>Linux</h1>
            </span>
            <h3 className='text-white align-middle w-fit text-sm font-inconsolata 
                  mt-7 border-2 rounded-3xl pl-5 pr-5 pt-3 pb-3'
            
            >A WANNABE DEVELOPERS ATTEMPT AT A QUIZ GAME</h3>
              <div id='typewriter' className='font-bold text-3xl mt-15 font-consolas'>
          </div>
          <div id='games-container'>
            <span>
              <button className='text-blue-700 bg-white border-2 text-md font-bold pl-9 pr-9 pt-2 pb-2 rounded-4xl hover:cursor-pointer hover:bg-blue-700 hover:text-white'
                onClick={() => navigate({to: '/quiz'})}
              >Quiz</button>
            </span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
