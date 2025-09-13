import {useState} from "react";

function Sample() {
    const [formdata,setFormdata] = useState({
        username : "",
        password : ""
    });

    let handleInput = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        setFormdata((curdata)=>{
            return {
                ...curdata,
                [name] : value
            }
        })
        
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formdata);// form data access
        setFormdata({
            username : "",
            password : ""
        })
    }

    return(
        <div>
            <h3>Forms</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={formdata.username} name="username" onChange={handleInput}/>
                <label htmlFor="password">Username</label> 
                <input type="text" id="password" value={formdata.password} name="password" onChange={handleInput}/>
                <button>click</button>
            </form>
        </div>
    )
}
export default Sample;