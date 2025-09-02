import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo(){
    const [todo,setTodo] = useState([{task : "sample",id : uuidv4(), isDone : false}]);
    const [newValue,setNewValue] = useState("");

    // adding new data
    let addNewTask = ()=>{
        setTodo((pre)=>{
            return [...pre,{task : newValue , id : uuidv4() , isDone : false}];
        });
        setNewValue("");    
    }

    // creating new value
    let CreateNewData = (event)=>{   
        setNewValue(event.target.value);
    }

    // delete task
    let handleDelete = (id)=>{
        setTodo(todo.filter((data)=> data.id!=id));
    }
    
    let doneAll = ()=>{
        setTodo((pre)=>{
            return pre.map((data)=>{
            return {
                ...data,
                isDone : true
            }
          })
        });
    }
    let doneOne = (id)=>{
        setTodo((prev)=>{
            return prev.map((data)=>{
            if(data.id === id) {
                return {
                    ...data,
                    isDone: true
                }
            }   
            else {
                return data;
            }
        })
        })

        /*let list = todo.map((data)=>{
            if(data.id === id) {
                return {
                    ...data,
                    task : data.task.toUpperCase()
                }
            }   
            else {
                return data;
            }
        });
        console.log(list);*/
    }


    return (
        <div>
            <h3>Todo App</h3>
            <br />
            <input onChange={CreateNewData} value={newValue} type="text" placeholder="Enter Task"/>
            <button onClick={addNewTask}>Add</button>
            <br></br>
            <h4><i>Your Tasks Are Here...</i></h4>
            {
                todo.map((data)=>{
                    return <li key={data.id}><span style = {data.isDone==true ? {textDecoration : "line-through"} : {}}>{data.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>handleDelete(data.id)}>Delete</button>
                            &nbsp;
                            <button onClick={()=>doneOne(data.id)}>Done</button>
                    </li>
                })
            }
            <br />
            <button onClick={doneAll}>Done All</button>

        </div>
    )
}
export default Todo;
