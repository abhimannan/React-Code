import { useState } from "react";

function Task() {
    const [inc,setInc] = useState({blue:0,yellow:0,red:0});

    let incBlue = ()=>{
        setInc((data)=>{
            // let data =  {...prev,blue : prev.blue+1};
            console.log(...data);
        });
    }

    return (
        <div>
            <p>Blue Moves : {inc.blue}</p>
            <button style={{backgroundColor : "blue"}} onClick={incBlue}>Blue</button>
        </div>
    )
}
export default Task;