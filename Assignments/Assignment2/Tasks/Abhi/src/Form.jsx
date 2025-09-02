import { useState } from "react";

function Form() {
    const [value,changeValue] = useState("");
    let handleForm = (e)=>{
        e.preventDefault();
        changeValue(e.target.value);
    }
    let handleInputData = (e)=>{
        // console.log(e.target.value);
        changeValue(e.target.value);
    }
    return(
        <>  
            <form action="/" onSubmit={handleForm}>
                <input onChange={handleInputData} type="text"></input>
                <p>{value}</p>
                <button>submit</button>
            
            </form>

        </>
    )
}
export default Form;