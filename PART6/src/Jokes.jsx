import { use, useState } from "react";


function Jokes() {
    const [joke,setJoke] = useState({});

    let jokeUrl = "https://official-joke-api.appspot.com/random_joke";
    let getJoke = async()=>{
        let res = await fetch(jokeUrl);
        let joke = await res.json();
        setJoke({setup : joke.setup,punch : joke.punchline});  
    }
    return (
        <>
            <h2>Jokes here</h2>
            <h4>{joke.setup}</h4>
            <h5>{joke.punch}</h5>
            <button onClick={getJoke}>Get Joke</button>
        </>
    )
}
export default Jokes;