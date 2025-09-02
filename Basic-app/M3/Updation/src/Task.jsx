import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Task() {
    const [list,setList] = useState([{task : "simple" , key :uuidv4() }]);
    const [newList,setNewList] = useState("");

    let addNewData = ()=>{
        // console.log(list);
        setList((prev)=> [...prev , {task : newList , key : uuidv4()}]);
        setNewList(""); 

    }

    let handleInput = (e)=>{
        setNewList(e.target.value);
    }
    let deleteTask = (id)=>{
        let res = list.filter((data)=> data.key != id);
        setList(res);
    }
    let uppperCaseAll = ()=>{
        setList((prev)=>{
            return prev.map((data)=>{
               return {
                  ...data,
                  task : data.task.toUpperCase()
               }
          })
        })
    }
    let upperCaseOne = (id)=>{
        setList((prev)=>{
            return prev.map((data)=>{
                if(data.key === id) {
                    return {
                   ...data,
                   task : data.task.toUpperCase()
            }
            }
            else {
                return data;
            }
                
        })
        });
       
    }
    return(
        <>
            <h2>CheckList</h2>
            <br></br>
            <input value={newList} onChange={handleInput} type="text"></input>
            <button onClick={addNewData}>Add Task</button>
            <br></br>
            <hr></hr>
            <ul>
                {
                   list.map((data)=>{
                      return <li key={data.key}>{data.task}
                             <button onClick={()=> deleteTask(data.key)}>Delete</button>
                             <button onClick={()=> upperCaseOne(data.key)}>UpperCaseOne</button>
                      </li>
                   })
                }
            </ul>
            <br>
            </br>
            <button onClick={uppperCaseAll}>Upper</button>
        </>
    )
}
export default Task;