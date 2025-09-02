function Button() {
    let hello = ()=>{
        console.log("Hello!");
    }
    let handlemouseover = ()=>{
        console.log("onMouseOver!");
    }
    let handleDbl = ()=>{
        console.log("double click");
    }
    return(
        <>
           
            <button onClick={hello}>Click Here</button>
            <p onMouseOver={handlemouseover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vero eligendi. Deleniti in esse ut laborum aperiam, expedita ratione dicta nesciunt quasi, sunt quam! Quam aspernatur delectus quia sit esse consequatur vero exercitationem mollitia ipsum reiciendis impedit similique eligendi nesciunt excepturi, aliquid temporibus. Quos maiores dolores quaerat dolorum exercitationem. Praesentium?</p>
            <button onDoubleClick={handleDbl}>Double Click</button>
                
        </>
    );
}

export default Button;
