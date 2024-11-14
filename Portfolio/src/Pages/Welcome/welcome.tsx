import './welcome.css' 
import DefaultButton from '../../components/buttons/DefaultButton'
import Anitext from '../../components/AnimationText/AnimationText'
function Welcome(props:any) {
  return (
    <> 
      <div className='Welcome'>
        <div>
            <div className='Hello'>
              <Anitext text = "Hello World!" class = "header"/>
              <text className='WelcomeText'>👋</text>
            </div>
          <Anitext text = "I'm Seojin/Chris Park" class = "header"/>
          <div className='Options'>
              <DefaultButton text = "About me" color = "Yellow" PropRef = {props.aboutMeRef}/>
              <DefaultButton text = "Experiences" color = "Blue"/>
              <DefaultButton text = "Projects" color = "Green"/>
              <DefaultButton text = "Resume" color = "Red"/>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Welcome