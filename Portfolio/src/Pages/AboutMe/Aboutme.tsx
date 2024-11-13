import "./Aboutme.css"

function AboutMe() {

  return (
    <>
      <div className='AboutMe'>
        <h1>About Me</h1>
        <div className="AboutContainer">
            <div className="Picture">
            </div>
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
