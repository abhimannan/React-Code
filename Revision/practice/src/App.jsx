import './App.css';
import Lottery from './Lottery';
import {sum} from "./helper.js";


function App() {
  let winCondition = (ticket)=>{
    return sum(ticket) === 12;
  }

  return (
    <div>
        <Lottery n={3} winCondition={winCondition}/>
    </div>
  )
}

export default App
