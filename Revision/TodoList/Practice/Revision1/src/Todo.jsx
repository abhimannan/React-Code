import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    const [list,setList] = useState([{task: "sample",id:uuidv4() , isDone: false}]);
    const [newTask,setNewTask] = useState("");

    let handleSubmit = (event)=>{
        event.preventDefault();
        setList((prev)=>{
            return [...prev,{task : newTask,id : uuidv4() , isDone : false}];
        });
        setNewTask("");
    }

    let handleChange = (event)=>{
        setNewTask(event.target.value);
    }   

    let handleDelete = (id)=>{
        setList((data)=>{
            return list.filter((data)=>{
                return id!=data.id;
            })
        })
    }
    let handleDone = ()=>{
        return setList(list.map((prev)=>{
            return {
                ...prev,
                task : prev.task.toUpperCase()
            }
        }))
        console.log(temp);
        // currently working here
    }

    return(
        <div>
            <h3>Todo List</h3>

                <input onChange={handleChange} value={newTask} type="text" placeholder="Enter the task" />
                &nbsp;&nbsp;
                <button onClick={handleSubmit}>ADD</button>
        
            <ul>
                {
                    list.map((data)=>{
                        return <li key={data.id}><span>{data.task}</span>&nbsp;&nbsp;
                                <button onClick={()=>handleDelete(data.id)}>Delete</button>
                                &nbsp;&nbsp;
                                <button onClick={handleDone}>Done</button>
                        </li>
                    })
                }
            </ul>
        </div>  
    )
}
export default Todo;