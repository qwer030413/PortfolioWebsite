import './App.css'
import DefaultButton from './components/buttons/DefaultButton'
// import Welcome from './Pages/Welcome/welcome'
import AboutMe from './Pages/AboutMe/Aboutme'
import { useRef } from 'react'
function App() {
  const aboutMeRef = useRef<HTMLDivElement| null>(null);
  return (
    
      <div className='Home'>
        {/* <Welcome /> */}
        <div className='Welcome'>
          <div>
            <text className='WelcomeText'>Hello World!👋</text>
            <text className='WelcomeText'>I'm Seojin/Chris Park</text>
            <div className='Options'>
                <DefaultButton text = "About me" color = "Yellow" PropRef = {aboutMeRef}/>
                <DefaultButton text = "Experiences" color = "Blue"/>
                <DefaultButton text = "Projects" color = "Green"/>
                <DefaultButton text = "Resume" color = "Red"/>
            </div>
          </div>
        </div>
        <AboutMe Propref = {aboutMeRef}/>
      </div>
        
    
  )
}

export default App
