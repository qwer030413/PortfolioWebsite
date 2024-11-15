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
                    Hi! My name is Seojin Park, but you can call me Chris. I am a software Engineer who loves to code in their free time, and I am eager to learn new things
                </text>
                <text className="descriptionText">
                    I am proficient in Java, Python, C++/C, Assembly MIPS, CSS, HTML, JavaScript, TypeScipt, Node.js, mySQL, Express.js and React.js/React Native
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
