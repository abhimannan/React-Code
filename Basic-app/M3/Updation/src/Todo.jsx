import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    const [task,setTask] = useState([{task : "new task" , key: uuidv4() ,isDone : false}]);
    const [newtask,setNewTask] = useState("");
    let styles = {
        color : "red"
    }
    let UpdateTask = (e)=>{
        e.preventDefault();
        setTask((prev)=>{
            return [...prev , {task : newtask , key : uuidv4() , isDone : false}]
        });
        setNewTask("");
        // console.log(task);
    }  
     let handleInput = (e)=>{
        setNewTask(e.target.value);
    }
    let deleteTask = (id)=>{
        let data = task.filter((data)=> data.key != id);
        setTask(data);
    }
    let MarkAllDone = ()=>{
        setTask((prev)=>{
            return prev.map((data)=>{
            return {
                ...data,
                isDone : true,
            }
        })
        });
    }
    let isDone = (id)=>{
        setTask((prev)=>{
            return prev.map((data)=>{
              if(data.key === id) {
                return {
                ...data,
                isDone : true,
            }
            }
            else {
                return data;
            }
        })
        });
    }

    return(
         <div>
            <h2>To Do App</h2>
            <form>
                <input value={newtask} onChange={handleInput} type="text" ></input>
                <button style={styles} onClick={UpdateTask}>Add Task</button>
            </form>
            <br></br>
            <br></br>
            <hr></hr>
            <h2>Your Tasks Todo</h2>
            <ul>
                {
                    task.map((data)=>{
                         return <li key={data.key}>                            
                            <span style = {data.isDone ? {textDecoration : "line-through"} : {}}>{data.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=> deleteTask(data.key)}>Delete</button>
                            <button onClick={()=> isDone(data.key)}>Done</button>
                            </li>
                 })
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>Uppercase All</button>

         </div>
    )
}

export  default Todo;