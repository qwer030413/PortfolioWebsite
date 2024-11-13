import "./Aboutme.css"
import { GrInfo } from "react-icons/gr";
import selfie from '../../Images/profilepicture.jpg';
function AboutMe(props:any) {

  return (
    <>
      <div className='AboutMe' ref = {props.Propref}>
        <div className="AboutHeader">
          <h1>About Me</h1>
          <GrInfo size={45} color="black"/>
        </div>
        <div className="AboutContainer">
            <img className="Picture" src={selfie} />
            <div className="Description">
                <text className="descriptionText">
                    Hi! My name is Seojin Park, but you can call me Chris. I am a software Engineer who loves to code in their free time, and I am eager to learn new things
                </text>
                <text className="descriptionText">
                    I am proficient in Java, Python, C++, Assembly MIPS, CSS, HTML, JavaScript, TypeScipt, Node.js, mySQL, Express.js and React.js
                </text>
                <text className="descriptionText">
                    In my free time, I am usually playing chess, going on hikes with my family, and going rock climbing with my friends
                </text>
            </div>
        </div>
      </div>
        
    </>
  )
}

export default AboutMe
