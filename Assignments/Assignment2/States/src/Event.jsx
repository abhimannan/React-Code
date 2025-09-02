import {useState} from "react";


function Event() {
    const [value,setValue] = useState("");
    const [key,setkey] = useState("");
    const [focus,setFocus] = useState(true);

    let handleClick = ()=>{
        console.log("button was clicked!");
    }
    let handleInput = (e)=>{
        setValue(e.target.value);
    }
    
    let handleMouseOver = (e)=>{
       console.log(e);
    }
    let handkeKeyDown = (e)=>{
        setkey(e.key);
    }
    let handleFocus = ()=>{
        return  setFocus(false);
    }
    return (<>
       <h3> dl </h3>
       <button onClick={handleClick}>Click</button>
        <input onChange={handleInput}></input>
        <p>{value}</p>
        <p onMouseOver={handleMouseOver}>MouseOver</p>
        <input type="text" onKeyUp={handkeKeyDown}></input>
        <p>key press : {key}</p>
        <label for="focus">Write Something</label>
        <input type="text" id="focus" onFocus={handleFocus} 
               style={
                {
                     background : focus ? "color" : "green"
                }
               }
        ></input>
    </>);
}

export default Event;