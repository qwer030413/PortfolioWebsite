import './welcome.css'
import DefaultButton from '../../components/buttons/DefaultButton'
function Welcome() {
  return (
    <> 
      <div className='Welcome'>
        <div>
          <text className='WelcomeText'>Hello World!👋</text>
          <text className='WelcomeText'>I'm Seojin/Chris Park</text>
          <div className='Options'>
              <DefaultButton text = "About me" color = "Yellow" />
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