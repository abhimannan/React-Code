import { useState,useEffect } from "react";

function Counter() {
    const [countx,setCountx] = useState(0);
    const [county,setCounty] = useState(0);

    useEffect(function sideEffect(){
        console.log("side-effect by rendering!");
    },[]);

    let increaseBtnx = ()=>{
        setCountx((pre)=>{
            return pre+1;
        })
    }

    let decreaseBtny = ()=>{
        setCounty((pre)=>{
            return pre-1;
        })
    }

    // let ResetBtn = ()=>{
    //     setCount(0);
    // }
    return (
        <>
            <h2>Counter</h2>
            <br></br>
            <h2>
            {
                countx
            }
            </h2>
            <button onClick={decreaseBtny}>-</button>
            {/* <button onClick={ResetBtn}>Reset</button> */}
            <button onClick={increaseBtnx}>+</button>
            
        </>
    )
}
export default Counter;