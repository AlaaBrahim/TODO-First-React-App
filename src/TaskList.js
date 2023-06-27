import { Task } from "./Task";  

export function TaskList(props){
    return(
      <div className='taskList'>
        {props.tasks.map((task) => {
          return( 
            <Task key={task.id} task={task} deleteTask={props.deleteTask} editTask={props.editTask} markCompletion={props.markCompletion}/>
          );})
        }
      </div>
    );
}