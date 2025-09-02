
import './App.css';
import Lotter from "./Lotter.jsx";
import Ticket from './Ticket.jsx';
import {WinNum} from "./helper.js";

function App() {
      // sending function as a prop
      let winCondition = (ticket)=>{
        return WinNum(ticket) === 15;  
      }
  return (
   
      <div>
          <Lotter n={2} winCondition={winCondition}/>
      </div>
      
  )
}

export default App
