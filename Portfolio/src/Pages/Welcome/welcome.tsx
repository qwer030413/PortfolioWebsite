import './welcome.css' 
import DefaultButton from '../../components/buttons/DefaultButton'
import Anitext from '../../components/AnimationText/AnimationText'
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import Resume from '../../Resume.pdf'
function Welcome(props:any) {
  return (
    <> 
      <div className='Welcome' ref = {props.homeRef}  id = "section1">
        <div>
            <div className='Hello'>
              <Anitext text = "Hello World!" class = "header"/>
              <text className='WelcomeText'>👋</text>
            </div>
          <Anitext text = "I'm Seojin/Chris Park" class = "header"/>
          <div className='Options'>
              <DefaultButton text = "LinkedIn" color = "Blue" icon = {<FaLinkedin size={22}/>} link = 'https://www.linkedin.com/in/seojin-park-332aaa213/'/>
              <DefaultButton text = "GitHub" color = "Black"  icon = {<FiGithub size={22}/>} link = 'https://github.com/qwer030413'/>
              <DefaultButton text = "Instagram" color = "Yellow" icon = {<FaInstagram size={22}/>} link = 'https://www.instagram.com/chrispark03_/'/>
              <DefaultButton text = "Email" color = "Green" icon = {<MdEmail size={22}/>} link = "mailto:comosjay@gmail.com?subject=(Subject)&body=Hi%20Chris!" />

              <DefaultButton text = "Resume" color = "Red" icon = {<IoDocumentTextOutline size={22}/>} link = {Resume}/>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Welcome