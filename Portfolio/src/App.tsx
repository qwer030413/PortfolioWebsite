import './App.css'
// import Welcome from './Pages/Welcome/welcome'
import AboutMe from './Pages/AboutMe/Aboutme'
import { useRef } from 'react'
import Welcome from './Pages/Welcome/welcome'
function App() {
  const aboutMeRef = useRef<HTMLDivElement| null>(null);
  return (
    
      <div className='Home'>
        <Welcome aboutMeRef = {aboutMeRef} />

        <AboutMe Propref = {aboutMeRef}/>
      </div>
        
    
  )
}

export default App
