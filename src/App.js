import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsed={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="red"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expand={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsed=60,
  expand,
  className='',
  expandButtonText='Show more',
  collapseButtonText= 'Show less',
  buttonColor='yellow'

}){
 
const [show,setShow] = useState(expand);
const [collapsedNumWords,setCollapseNumWords] = useState(children)
  
const expandButton = ()=>
{
  setShow(true)
  setCollapseNumWords(children)
}

const collapseButton = ()=>{
  setShow(false)
  
  setCollapseNumWords(children.slice(0,collapsed) + '...')
}



  return <div  className= {className}>
         


            {
              show ? <div>
                     {collapsedNumWords}
                <button style= {{color:buttonColor}}onClick={collapseButton}>{collapseButtonText}</button> 
              </div>
              :
              <div> 
                {collapsedNumWords.slice(0,collapsed) + '....'}
                <button style= {{color:buttonColor}} onClick={expandButton} >{expandButtonText}</button>
              </div>
            } 

  
  </div>;
}
