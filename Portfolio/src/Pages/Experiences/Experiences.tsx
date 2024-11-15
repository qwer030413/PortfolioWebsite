import './Experiences.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdWork } from "react-icons/md";

import 'react-vertical-timeline-component/style.min.css';

function Experiences(props:any) {
    let timeLine = [
        {
            id : 1,
            title: "Software Engineer Intern @ Falkor",
            Used: "React Native | Django | REST APIs | Python | Typescript",
            date : "July 2024 - August 2024",
            location : "San Diego, California (Remote)",
            description: "Yap Yap Yap",
            icon: <MdWork />
        },
        {
            id : 2,
            title: "Firmware Test Engineer Intern @ Sun Tech",
            Used: "JIRA | Git | Firmware",
            date : "June 2021 - August 2021",
            location : "San Diego, California",
            description: "Yap Yap Yap",
            icon: <MdWork />
        },
        {
            id : 3,
            title: "Machine Learning Internship",
            Used: "Jupiter Notebook | SKlearn | Pandas | Beautiful Soup",
            date : "October 2020 - August 2021",
            location : "San Diego, California (Remote)",
            description: "Yap Yap Yap",
            icon: <MdWork />
        }
    ]
    return (
        <div className='ExperiencesContainer' ref = {props.Propref} id = "section3">
            <VerticalTimeline layout = '1-column-left'>
                {timeLine.map(Exp => {
                    return(
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        key = {Exp.id}
                        date = {Exp.date}
                        dateClassName = "date"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', padding:'10px' }}
                        icon = {Exp.icon}
                        contentStyle={{ background: 'rgb(40, 40, 50)', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        
                        >
                            <h3 className="WorkTitle">{Exp.title}</h3>
                            <h4 className='Location'>{Exp.location}</h4>
                            <h5 className='Used'>{Exp.Used}</h5>
                            <p>{Exp.description}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>

        </div>
      
        
    
    )
}

export default Experiences
