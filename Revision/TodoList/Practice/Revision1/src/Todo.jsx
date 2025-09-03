import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    const [list,setList] = useState([{task: "sample",id:uuidv4() , isDone: false}]);
    const [newTask,setNewTask] = useState("");
    // adding new task when the user is click on the submit button
    let handleSubmit = (event)=>{
        event.preventDefault();
        setList((prev)=>{
            return [...prev,{task : newTask,id : uuidv4() , isDone : false}];
        });
        setNewTask("");
    }
    // to store the input field value
    let handleChange = (event)=>{
        setNewTask(event.target.value);
    }   
    // delete the task
    let handleDelete = (id)=>{
        setList((data)=>{
            return list.filter((data)=>{
                return id!=data.id;
            })
        })
    }

    let handleDoneAll = ()=>{
        return setList(list.map((prev)=>{
            return {
                ...prev,
                isDone : true
            }
        }))
    }

    let handleDone = (id)=>{
        setList((prev)=>{
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
        });
        
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
                        return <li key={data.id}><span style={data.isDone ? {textDecoration : "line-through"} : {}}>{data.task}</span>&nbsp;&nbsp;
                                <button onClick={()=>handleDelete(data.id)}>Delete</button>
                                &nbsp;&nbsp;
                                <button onClick={()=>handleDone(data.id)}>Done</button>
                        </li>
                    })
                }
            </ul>
            <button onClick={handleDoneAll}>Done All</button>
        </div>  
    )
}
export default Todo;