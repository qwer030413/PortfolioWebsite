import './welcome.css'
import DefaultButton from '../buttons/DefaultButton'
function Welcome() {
  return (
    <> 
      <div className='Welcome'>
        <text className='WelcomeText'>Hello World!👋</text>
        <text className='WelcomeText'>I'm Seojin/Chris Park</text>
        <div className='Options'>
            <DefaultButton text = "About me" color = "Yellow"/>
            <DefaultButton text = "Experiences" color = "Blue"/>
            <DefaultButton text = "Projects" color = "Green"/>
            <DefaultButton text = "Resume" color = "Red"/>
        </div>
      </div>
        
    </>
  )
}

export default Welcome