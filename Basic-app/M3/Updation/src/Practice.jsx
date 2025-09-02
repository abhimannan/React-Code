import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function Practice() {
    const [task,setTask] = useState([{task : "Task1",id : uuidv4(), isDone : false}]);
    const [newTask,setNewTask] = useState("");

    let styles = {
        textDecoration : "line-through"
    }
    
    let AddTask = (e)=>{
        e.preventDefault();
        setTask((prev)=>{
            return [...prev , {task : newTask,id : uuidv4(), isDone : false}]
        });
        // console.log(task);
        setNewTask("");
    }
     let createNewTask = (e)=>{
        setNewTask(e.target.value);
    }
    let deleteTask = (id)=>{
        setTask(task.filter((data)=>{
            if(data.id != id) {
                return data;
            }
        }));
    }
    let markAllDone = ()=>{
        setTask((prev)=>{
            return prev.map((data)=>{
            return {
                ...data,
                isDone : true,
            }
        })
        })
    }
    let markDone = (id)=>{
        setTask((prev)=>{
            return prev.map((data)=>{
                if(data.id == id) {
                    return {
                    ...data,
                    isDone : true
                }
                }
                else {
                    return data;
                }
            })
        })
    }
    return(
        <>
            <h2>Todo App Practice</h2>
            <input onChange={createNewTask} value={newTask} type="text" placeholder="Enter Task"/>
            <button onClick={AddTask}>Add</button>
            <br></br>
            <hr></hr>
            <h3>List of Tasks</h3>
            <ul>
                {
                    task.map((data)=>{
                        return <li key={data.id}>
                            <span style={data.isDone ? {textDecoration : "line-through",color : "red"} : {}}>{data.task}</span>
                        <button onClick={()=> deleteTask(data.id)}>Delete</button>
                        <button onClick={()=> markDone(data.id)}>Done</button>
                        </li>
                    })
                }
                <br></br>
                <button onClick={markAllDone}>Done All</button>
            </ul>

        </>
    )
}

export default Practice;