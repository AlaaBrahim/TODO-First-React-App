import { Task } from "./Task";  

export function TaskList(props){
    return(
      <div className='taskList'>
        {props.tasks.map((task) => {
          return( 
            <Task key={task.id} task={task} />
          );})
        }
      </div>
    );
}