
import './App.css';
import Ludo from "./Ludo.jsx";
import Todo from "./Todo.jsx";
import Task from "./Task.jsx";
import Practice from "./Practice.jsx";
import Planner from "./Planner.jsx";
import Lottery from './Lottery.jsx';
import Ticket from "./Ticket.jsx";
import {lotteryNum} from "./helper.js";


function App() {

  let winningCondition = (ticket)=>{
    // return lotteryNum(ticket) === 10;  // we can change the winning condition
    return ticket[0] === 0;
  }

  return (
    <>
      {/* <Ludo /> */}
      {/* <Todo /> */}
      {/* <Task /> */}
      {/* <Practice /> */}
      {/* <Planner /> */}
      {/* <Lottery /> */}
      {/* <Ticket ticketArr={[0,1,2]} /><br></br>
      <Ticket ticketArr={[1,4,3,6,7,8,90]} /> */}
      <Lottery n={3} winningCondition={winningCondition}/>
    </>
  )
}

export default App
