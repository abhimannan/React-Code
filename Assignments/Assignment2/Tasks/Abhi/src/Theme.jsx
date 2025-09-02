import {useEffect, useState} from "react";

function Theme() {
    const [theme,setTheme] = useState(true);
    let handleChange = (e)=>{
        console.log(e);
        setTheme(!theme);
    }
    useEffect(()=>{
        document.body.style.backgroundColor = theme ? "violet" : "white";
    },[theme]);
    return(
        <div>
            <button onClick={handleChange}>
                Theme
            </button>
        </div>
    )
}

export default Theme;