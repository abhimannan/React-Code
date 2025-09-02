import TicketNum from './TicketNum.jsx';

function Ticket({ticketArr}) {
    return(
        <>
            {
                ticketArr.map((num,index)=>{
                    return <TicketNum num={num} key={index}/>
                })
            }
        </>
    )
}
export default Ticket;