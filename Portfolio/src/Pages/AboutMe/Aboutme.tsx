import "./Aboutme.css"
import { HiLightBulb } from "react-icons/hi";
import selfie from '../../Images/profilepicture.jpg';
function AboutMe(props:any) {

  return (
    <>
      <div className='AboutMe' ref = {props.Propref} id = "section2"> 
        <div className="AboutHeader">
          <h1>About Me</h1>
          {/* <Anitext  text = "About Me" class = "header"/> */}
          <div className="Line"></div>
          <HiLightBulb size={55} color="black"/>
        </div>
        <div className="horLine"/>
        <div className="AboutContainer">
            <img className="Picture" src={selfie} />
            <div className="Description">
                <text className="descriptionText">
                    Hi! My name is Seojin Park, but you can call me Chris. I am a Junior in UC San Diego studying computer science, and I am actively looking for internships!
                </text>
                <text className="descriptionText">
                    I am eager to learn new things and I am blah blah blah
                </text>
                <text className="descriptionText">
                    In my free time, I love to play chess, video games, go hiking, and go rock climb with my friends
                </text>
            </div>
        </div>
      </div>
        
    </>
  )
}

export default AboutMe
