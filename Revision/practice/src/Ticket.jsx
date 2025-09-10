import { useState } from "react";
import LotteryNum from "./LotteryNum.jsx";


function Ticket({ticket}) {
    return(
        <div>
            {
                ticket.map((data,index)=>{
                    return <LotteryNum num={data} key={index}/>
                })
            }
        </div>  
    )
}
export default Ticket;