import TextSpan from './charSpan.tsx';
import './AnimationText.css';


function Anitext(props: any){
    
    const sentance = props.text.split("");
    console.log(sentance)

    return(
        
            <div className={props.class}>
                {sentance.map((letter: string, index: number) =>{
                    return(
                        <text>
                                <TextSpan key = {index} className = "span" text = {letter} />
                        </text>
                        
                    )
                
                    })}
            </div>
        
    );
}

export default Anitext;