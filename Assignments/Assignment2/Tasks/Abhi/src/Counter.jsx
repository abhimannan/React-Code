import {useState} from "react";


function Counter() {
    const [count,setCount] = useState(0);
    let handleDec = ()=>{
        setCount((preValue)=>{
            return preValue-1;
        });
    }
     let handleRes = ()=>{
        setCount(0);
    }
     let handleInc = ()=>{
        setCount((preValue)=>{
            return preValue+1;
        });
    }
    return(
        <>  <h3>{count}</h3>
            <button onClick={handleDec}>-</button>
            <button onClick={handleRes}>Reset</button>
            <button onClick={handleInc}>+</button>
        </>
    )
}

export default Counter;