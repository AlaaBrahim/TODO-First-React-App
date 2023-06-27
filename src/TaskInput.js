import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export function TaskInput(props){
  const [isSpinning, setIsSpinning] = useState(false);

  return(
      <article className='addTasks' class="">
      <input style={{width:'80%',margin:'2.4%'}} type="text" placeholder='Task' value={props.inputTask} onChange={(event) => props.setInputTask(event.target.value)}></input>
      <button
       style={{width:'15%'}}
       onMouseOver={() => setIsSpinning(true)}
       onMouseOut={() => setIsSpinning(false)}
       onFocus={() => setIsSpinning(true)}
       onBlur={() => setIsSpinning(false)}
       onClick={props.addTask}
       >
        <FontAwesomeIcon icon={faPlus} spin={isSpinning}/>
      </button>
    </article>
  );
}