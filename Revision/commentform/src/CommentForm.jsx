import { useState } from "react";


function CommentForm() {
    const [formdata,setFormdata] = useState({
        username : "",
        remarks : "",
        rating : 1
    });

    let handleInputChange = (event)=>{
        let fieldName = event.target.name;
        let inputValue = event.target.value;
        setFormdata((curdata)=>{
            return {
                ...curdata,
                [fieldName] : inputValue
            }
        })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formdata);
        setFormdata({
        username : "",
        remarks : "",
        rating : 1
    });
    }
    
    return(
        <div>
            <h4>Leave Your Comment Here</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"></label>
                <input
                    id="username"
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={formdata.username}
                    onChange={handleInputChange}
                 
                 /><br /><br />

                <label htmlFor="remarks"></label>
                <textarea
                    id="remarks" 
                    placeholder="Remarks"
                    name="remarks"
                    value={formdata.remarks}
                    onChange={handleInputChange}
                
                ></textarea><br /><br />

                <label htmlFor="rating"></label>
                <input
                    id="rating"
                    type="number" 
                    placeholder="Rating"
                    name="rating"
                    value={formdata.rating}
                    onChange={handleInputChange}
                
                /><br />

                <button>Submit</button>

            </form>
        </div>
    )
}
export default CommentForm;