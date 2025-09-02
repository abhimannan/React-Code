import {useState} from "react";


function Like(){
    const [click,setClick] = useState(true);
    let toggle = ()=>{
        // console.log(click);
        setClick(!click);
    }
    return(
        <>
             <h1>font awesom</h1>
             <p onClick={toggle}>
                {
                    click ?  <i class="fa-regular fa-heart"></i> : 
                             <i class="fa-solid fa-heart"></i>
                }
            </p>  
        </>
    );
}

export default Like;