import { useState, useEffect } from 'react';
import { TaskInput } from './TaskInput';
import { TaskList } from './TaskList';
import { ThemeSwitcher } from './ThemeSwitcher';


function App() {

  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if(data)
      setTasks(JSON.parse(data));
    else
      setTasks([
          {"id":0, "taskName":"Wash dishes", "completed":false},
          {"id":1, "taskName" :"Do laundry", "completed":false},
          {"id":2, "taskName" :"Take out trash", "completed":false}
      ]);
  },[]);
  

  const addTask = () =>{
    if(inputTask === "") return;
    const nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0;
    const newTask = {"id":nextId, "taskName":inputTask, completed:false};
    setTasks([...tasks, newTask]);
    setInputTask("");
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  }

  const deleteTask = (key) =>{  
    const newTasks = [...tasks];
    const taskList = newTasks.filter((task) => task.id !== key );
    setTasks(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }

  const editTask = (key, taskName) =>{
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.id === key);
    newTasks[index].taskName = taskName;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  const markCompletion = (key) =>{
    const newTasks = [...tasks];  
    const index = newTasks.findIndex((task) => task.id === key);
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  return (
    <main class="container">
      <ThemeSwitcher/>
      <br/><br/><br/>
      <TaskInput inputTask={inputTask} setInputTask={setInputTask} addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} markCompletion={markCompletion}/>
    </main>
  );
}

export default App;