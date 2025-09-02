import {useState} from "react";
import Like from "./Like.jsx";
import './App.css';

let init = ()=>{
  console.log("Init was called!");
  return Math.random();
}

function App() {
  let [count,setCount] = useState(init);// initialization
  console.log("component re-rendered!");

  let incrementCount = ()=>{
      setCount((preCount) =>{
         return preCount+1;
      });
  }
  return (
    <>
      <h3>count : {count}</h3>
      <button onClick={incrementCount}>count</button>
      {/* <Like /> */}
    </>
  );
}

export default App
