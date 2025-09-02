import { useState } from "react";


function Ludo() {
    let [move,setMove] = useState({blue : 0,yellow : 0,green : 0,red : 0});
    let [arr,setArr] = useState(["old value"]);

    let updateBlue = ()=>{
        // console.log(move.blue);
        // setMove((prev)=>{
        //     return {...prev , blue : prev.blue+1 };
        // });
      
      
    }
    let updateYellow = ()=>{
        setMove((prev)=>{
            return {...prev,yellow : prev.yellow+1}
        });
    }
    let updateGreen = ()=>{
        setMove((prev)=>{
            return {...prev,green : prev.green+1}
        });
    }
    let updateRed = ()=>{
        setMove((prev)=>{
            return {...prev,red : prev.red+1}
        });
    }

    return(
        <>
            <h3>Game start...</h3>
            <p>{arr}</p>
            <p>Blue count: {move.blue}</p>
            <button onClick={updateBlue} style={{backgroundColor : "blue"}}>+1</button>
            <p>Yellow count: {move.yellow}</p>
            <button onClick={updateYellow} style={{backgroundColor : "yellow",color : "black"}}>+1</button>
            <p>Green count: {move.green}</p>
            <button onClick={updateGreen} style={{backgroundColor : "Green",color : "black"}}>+1</button>
            <p>Red count: {move.red}</p>
            <button onClick={updateRed} style={{backgroundColor : "Red"}}>+1</button>

        </>
    )
}

export default Ludo;
