import { useState } from "react";

function Count() {
    const [count,setCount] = useState(0);

    let handleDecrease = ()=>{
        setCount(count-1);
    }
    let handleReset = ()=>{
        setCount(0);
    }
    let handleIncrease = ()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h3>Counter</h3>
            <h1>{count}</h1>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrease}>+</button>
        </div>
    )
}
export default Count;