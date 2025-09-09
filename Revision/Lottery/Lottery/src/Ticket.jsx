import TicketNum from "./TicketNum";

function Ticket({ticket}) {

    return(
        <div>
                {
                    ticket.map((data,index)=>{
                        return <TicketNum num={data} key={index}></TicketNum>
                    })
                }
        </div>
    )
}
export default Ticket;