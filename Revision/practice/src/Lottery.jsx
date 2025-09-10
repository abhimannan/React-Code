import { useState } from "react";
import {newTicket , sum} from "./helper.js";
import Ticket from "./Ticket.jsx";


function Lottery({n , winCondition}) {
    const [ticket,setTicket] = useState(newTicket(n));
    
    let isWin = winCondition(ticket);

    let generateTicket = ()=>{
        setTicket(newTicket(n));
    }
    return(
        <div>
            <h2>Lucky Winner</h2>
            <Ticket ticket={ticket}/>
            <h1>{isWin && "Congratulation You Got The Lucky Number!"}</h1>
            <button onClick={generateTicket}>Click</button>
        </div>
    )
}
export default Lottery;