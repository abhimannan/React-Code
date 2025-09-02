import Ticket from "./Ticket.jsx";
import {useState} from "react";
import {generateArr } from "./helper.js";
import {Button} from "./Button.jsx";


function Lotter({n , winCondition}) { // winCondition is function as prop
    const [ticket,setTicket] = useState(generateArr(n));

    let isLucky = winCondition(ticket); // gives boolean
    console.log(isLucky);

    let getNewLottery = ()=>{
        setTicket(generateArr(n));
    }

    return(
        <>
            <Ticket ticketArr={ticket} />
            <br></br>
            <Button action={getNewLottery} />
            <h3>{isLucky && "You Are The Lucky Winner :)" }</h3>
        </>
    )
}
export default Lotter;