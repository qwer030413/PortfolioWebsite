import './App.css'
// import Welcome from './Pages/Welcome/welcome'
import AboutMe from './Pages/AboutMe/Aboutme'
import { useEffect, useRef, useState } from 'react'
import Welcome from './Pages/Welcome/welcome'
import Tabs from './components/Tab/Tabs'
function App() {
  const containerRef = useRef<HTMLDivElement| null>(null)
  const homeRef = useRef<HTMLDivElement| null>(null);
  const aboutMeRef = useRef<HTMLDivElement| null>(null);
  const [tabs, setTabs] = useState(1);
  function updateTabs(id: number, tab: any)
  {
      setTabs(id);   
      tab.current?.scrollIntoView({behavior: 'smooth'})
  }
  useEffect(() => {
        const container = containerRef.current;
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            if(container){
              const tab2Boundary = (container.querySelector('#section1') as HTMLElement)?.offsetTop || 0;
              const tab3Boundary = (container.querySelector('#section2') as HTMLElement)?.offsetTop || 0;
              if (scrollY < tab2Boundary + 500) {
                setTabs(1); 
              } 
              else if (scrollY < tab3Boundary) {
                setTabs(2); 
              }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    },[]);
  return (
        <div className='Home' ref = {containerRef}>
          <Tabs homeRef = {homeRef} aboutMeRef = {aboutMeRef} tabs = {tabs} updateTabs = {updateTabs}/>
          <Welcome homeRef = {homeRef} aboutMeRef = {aboutMeRef}/>
          <AboutMe Propref = {aboutMeRef}/>
        </div>
      
        
    
  )
}

export default App
