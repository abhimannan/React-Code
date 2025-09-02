import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Planner() {
    const [plan,setPlan] = useState([{task : "plan1" , id :uuidv4() ,isDone : false }]);
    const [newPlan,setNewPlan] = useState("");

    let addPlan = ()=>{
        setPlan((prev)=>{
             return [...prev , {task : newPlan , id :uuidv4() , isDone : false}]
        });
        setNewPlan("");
    }
    let getNewPlan = (e)=>{
        setNewPlan(e.target.value);
        console.log(newPlan);
    }
    let deleteTask = (id)=> {
        setPlan((prev)=>{
            return prev.filter((data)=>{
                if(data.id != id) {
                    return data;    
                }
            })
        })
    }
    let markAll = ()=>{
        setPlan((prev)=>{
            return prev.map((data)=>{
              return {
                  ...data,
                  isDone : true
               }
            })
        })
    }
    let markOne = (id)=>{
        setPlan((prev)=>{
            return prev.map((data)=>{
                if(id == data.id) {
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
            <h2>Daily Planner</h2>
            <input value={newPlan} onChange={getNewPlan} type="text" />
            <button onClick={addPlan}>Add</button>
            <br></br>
            <hr></hr>
            <h3>Your Plans</h3>
            <ul>
                {
                    plan.map((data)=>{
                        return <li key={data.id}>
                            <span style={data.isDone ? {textDecoration : "line-through"} : {}}>{data.task}</span>
                                <button onClick={()=> deleteTask(data.id)}>Delete</button>
                                <button onClick={()=> markOne(data.id)}>Done</button>
                        </li>
                    })
                }
            </ul>
            <br></br>
            <button onClick={markAll}>Done All</button>
        </>
    )
}
export default Planner;