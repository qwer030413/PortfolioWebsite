import SkillIcon from '../../components/SkillIcon/SkillIcon';
import './Skills.css'
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import cpp from '../../Images/cpp.png'
import java from '../../Images/java.png'
import python from '../../Images/python.png'
import sql from '../../Images/sql.png'
import css from '../../Images/css.png'
import html from '../../Images/html.png'
import linux from '../../Images/linux.png'
export default function Skills(props:any){
    let SkillList = [
        {
            id:1,
            icon : <FaReact size={80} color='#B3B3FF'/>,
            text : "React"
        },
        {
            id:2,
            icon : <IoLogoJavascript size={80} color='yellow' />,
            text : "JavaScript"
        },
        {
            id:3,
            icon : <SiTypescript size={72} color='#8383FF'/>,
            text : "TypeScript"
        },

        {
            id:4,
            icon : <FaNodeJs size={80} color='green'/>,
            text : "Node.js"
        },
        {
            id:5,
            icon : <img src = {java} className='Svg'/>,
            text : "Java"
        },
        {
            id:6,
            icon : <img src = {cpp} className='Svg'/>,
            text : "C++"
        },
        {
            id:7,
            icon : <img src = {python} className='Svg'/>,
            text : "Python"
        },
        {
            id:8,
            icon : <img src = {css} className='Svg'/>,
            text : "CSS"
        },
        {
            id:9,
            icon : <img src = {html} className='Svg'/>,
            text : "HTML"
        },
        {
            id:10,
            icon : <img src = {sql} className='Svg'/>,
            text : "MySQL"
        },
        {
            id:11,
            icon : <img src = {linux} className='Svg'/>,
            text : "Linux"
        },
        {
            id:12,
            icon : <FaDocker size={70} color='#8978FD'/>,
            text : "Docker"
        },

        
        
    ]
    return(
        <div className='SkillsContainer' ref = {props.Propref} id = "section4">
            <h1>My Skills</h1>
            <div className='SkillListContainer'>
                {SkillList.map(skill => {
                    return(
                        <SkillIcon icon = {skill.icon} text = {skill.text} key = {skill.id}/>
                    )
                })}
            </div>
        </div>
    );
}