import './buttons.css'
import {motion} from "framer-motion";
function DefaultButton(props: any) {

  return (
    
      <motion.button
      className={`DButton ${props.color}`}
      whileHover = {{y:-10}}
      >
        <text className='DButtonText'>{props.text}</text>
      </motion.button>
        
  )
}

export default DefaultButton