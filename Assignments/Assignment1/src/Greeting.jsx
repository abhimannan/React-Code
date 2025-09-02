function Greeting() {
    let data = new Date();
    let hour = data.getHours();
    if(hour < 12) {
        console.log("Good Morning");
    }
    else if(hour > 12 && hour <18) {
        console.log("good after noon");
    } 
    else {
        console.log("Good Night");
    }
    return(
        <>
            <p>Date</p>
        </>
    )
}

export default Greeting;