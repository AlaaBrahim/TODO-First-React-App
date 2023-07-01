import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faPenToSquare, faX, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { TaskContext } from './App';

export function Task(props) {
    const { deleteTask, markCompletion, editTask } = useContext(TaskContext);

    const [deleteIsBouncing, setDeleteIsBouncing] = useState(false);
    const [completedIsBouncing, setCompletedIsBouncing] = useState(false);
    const [editIsBouncing, setEditIsBouncing] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(props.task.taskName);

    const handleEdit = () => {
      isEditing && editTask(props.task.id, editedTask);
      setEditedTask(props.task.taskName);
      setIsEditing(!isEditing);
    }

    return(
        <article class="grid" style={{marginBottom:'1rem'}}>
          {
            isEditing ? <input onChange={(event) => setEditedTask(event.target.value)} type="text" defaultValue={props.task.taskName}/> : <p style={{ color : props.task.completed && "#7cb342", fontWeight:"630"}}>{props.task.taskName}</p>
          }
        <div style={{textAlign:'right'}}> 
          <button 
            style={{marginLeft:'0.5rem', display: isEditing ? 'none' : 'inline-block'}}
            onClick={() => deleteTask(props.task.id)}
            onMouseOver={() => setDeleteIsBouncing(true)}
            onMouseOut={() => setDeleteIsBouncing(false)}
            onFocus={() => setDeleteIsBouncing(true)}
            onBlur={() => setDeleteIsBouncing(false)}
          >
            <FontAwesomeIcon icon={faTrash} bounce={deleteIsBouncing} />
          </button>
          <button
            style={{marginLeft:'0.5rem', display: isEditing ? 'none' : 'inline-block'}}
            onClick={() => markCompletion(props.task.id)}
            onMouseOver={() => setCompletedIsBouncing(true)}
            onMouseOut={() => setCompletedIsBouncing(false)}
            onFocus={() => setCompletedIsBouncing(true)}
            onBlur={() => setCompletedIsBouncing(false)} 
          >
            <FontAwesomeIcon icon={ props.task.completed ? faRotateRight : faCheck} bounce={completedIsBouncing}/>
          </button>
          <button
            style={{marginLeft:'0.5rem', display: !isEditing ? 'none' : 'inline-block'}}
            onMouseOver={() => setDeleteIsBouncing(true)}
            onMouseOut={() => setDeleteIsBouncing(false)}
            onFocus={() => setDeleteIsBouncing(true)}
            onBlur={() => setDeleteIsBouncing(false)}
            onClick={() => setIsEditing(false)}
          >
            <FontAwesomeIcon icon={faX} bounce={deleteIsBouncing}/>
          </button>

          <button 
            style={{marginLeft:'0.5rem'}}
            onMouseOver={() => setEditIsBouncing(true)}
            onMouseOut={() => setEditIsBouncing(false)}
            onFocus={() => setEditIsBouncing(true)}
            onBlur={() => setEditIsBouncing(false)}
            onClick={handleEdit}
          >
            <FontAwesomeIcon icon={faPenToSquare} bounce={editIsBouncing}/>
          </button>
          
        </div>
      </article>
    );
}