import { useRef } from 'react';
import './buttons.css'
import {motion} from "framer-motion";
function DefaultButton(props: any) {
  const test = useRef(null);
  return (
    
      <motion.button
      className={`DButton ${props.color}`}
      onClick={() => {props.PropRef.current?.scrollIntoView({behavior: 'smooth'})}}
      whileHover = {{y:-10}}
      >
        <text className='DButtonText'>{props.text}</text>
      </motion.button>
        
  )
}

export default DefaultButton