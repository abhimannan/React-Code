import LotteryNum from "./LotteryNum.jsx";


function Ticket({ticketArr}) {
    // const [ticket,setcket] = useState(generateArr(3));

    // let generateNums = ()=>{
    //      setcket(generateArr(3));
    // }
   
    return(
        <div>
            <h3>Lottery Ticket</h3>
            <br />
                {
                    ticketArr.map((data,index)=>{
                        return <LotteryNum num={data} key={index} />
                    })
                }
                <br></br>
                
            
        </div>
    )
}
export default Ticket;