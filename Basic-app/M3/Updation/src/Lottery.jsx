import { useState } from "react";
import {generateRandomArr , lotteryNum} from "./helper.js";
import Ticket from "./Ticket.jsx";
import Button from "./button.jsx";


function Lottery({n=3 , winningCondition}) {
    const [ticket , setTicket] = useState(generateRandomArr(n));

    let sum = winningCondition(ticket);

    let newTicket = ()=>{
        setTicket(generateRandomArr(n));
    }
    return(
        <>
            <h3>Lottery Game</h3>
            <hr></hr>
            <div className="ticket">
                <span>Your Lottery Num : </span>
                <Ticket ticketArr={ticket}/>
            </div>
            <br></br>
            <Button action={newTicket}/>
            <br></br>
            <h3>{sum === 15 && "Congradulations You Won 15,000 rupees :)"}</h3>
        </>
    )
}
export default Lottery;