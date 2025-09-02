
import {useState} from "react";


function Like() {
    const [isLike,setIsLike] = useState(false);
    

  let toggleLike = ()=>{
    console.log("toggled!");
  }
  
  return (
    <div>
      <button onClick={toggleLike}><i class="fa-regular fa-heart"></i></button>
      
        {/* <i class="fa-solid fa-heart"></i> */}
    </div>
  );
}

export default Like;