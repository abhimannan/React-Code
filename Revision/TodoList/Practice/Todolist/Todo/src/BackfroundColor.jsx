import { useState } from "react";


function BackfroundColor() {
    const [color,setColor] = useState(false);

    let changeColor = ()=>{
        setColor(!color);
    }

    return(
        <div style={{
            backgroundColor : color ? "black" : "white",
            color : color ? "black" : "white",
        }}>
            
            <button onClick={changeColor}>Change Background Color</button>
        </div>
    )
}
export default BackfroundColor;