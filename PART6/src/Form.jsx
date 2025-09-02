import { useState } from "react";

function Form() {
    const [data,dataChange] = useState({
        fullname : "",
        username : "",
        password : ""
    });
    // const [username,setUserName] = useState("username");
    // const [password,setPassword] = useState("passport");

    let handlecChanges = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        dataChange((curData)=>{
            return {
                ...curData,
                [name] : value
            }
        })
    }
    
    let handleForm = (event)=>{
        event.preventDefault();
        dataChange({
            fullname : "",
            username : "",
            password : ""
        })
    }
    return(
        <div>
            <form onSubmit={handleForm}>
                <label htmlFor="fullName">FullName</label>
                <input name="fullName" type="text" value={data.fullName} id="fullName" onChange={handlecChanges}/>
                <br></br>
                <label htmlFor="username">Username</label>
                <input name="username" type="text" value={data.username} id="username" onChange={handlecChanges}/>
                <br />
                <label htmlFor="password">Password</label>
                <input name="password" type="text" value={data.password} id="password" onChange={handlecChanges}/>
                <button>click</button>
            </form>
        </div>
    )
}
export default Form;