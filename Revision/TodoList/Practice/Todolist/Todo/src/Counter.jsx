import { useState } from "react";


function Counter() {
    const [count,setCount] = useState(0);

    let increase = ()=>{
        setCount(count+1);
    }
     let decrease = ()=>{
        setCount(count-1);
    }
    let reset = ()=>{
        setCount(0);
    }
    return(
        <div>
            <h3>Count : {count}</h3>
            <br />
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increase}>+</button>
        </div>
    )
}
export default Counter;