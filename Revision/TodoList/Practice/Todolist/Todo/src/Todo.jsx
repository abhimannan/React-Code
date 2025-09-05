import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function Todo() {
    const [list,setList] = useState([{work : "sample", id:uuidv4(),isDone : false}]);
    const [task,setTask] = useState("");
    
    let DisplayData = ()=>{
            setList((prev)=>{
                return [...prev,{work : task, id : uuidv4(),isDone : false}]
            });
            setTask("");
    }
    let CreateNewTask = (event)=>{
        setTask(event.target.value);
    }

    let deleteTask = (id)=>{
        setList((prev)=>{
            return prev.filter((data)=>{
            if(id!=data.id) {
                return data;
            }
            else {
                return null;
            }
        })
        })
    }

    let DoneAll = ()=>{
        setList((prev)=>{
            return prev.map((data)=>{
            return {
                ...data,
                isDone : true
            }
        });
        })
    }

    let doneOne = (id)=>{
        setList((prev)=>{
            return prev.map((data)=>{
                if(data.id==id) {
                    return {
                ...data,
                isDone : true
                 }
               }
               else {
                return data;
               }
        });
        })
    }
        
    return(
        <div>
            <input value={task} name="task" onChange={CreateNewTask} type="text" placeholder="Enter the task" />
            <button onClick={DisplayData}>Add</button>
            <br></br>
            <br></br>
            <ul>
                {
                    list.map((data)=>{
                        return <li key={data.id}><span style={data.isDone ? {textDecoration : "line-through"} : {}}>{data.work}</span>
                                <button onClick={()=>deleteTask(data.id)}>Delete</button>
                                <button onClick={()=>doneOne(data.id)}>Done</button>
                        </li>
                    })
                }
            </ul>
            <br />
            <button onClick={DoneAll}>DoneAll</button>
        </div>
    )
}
export default Todo;