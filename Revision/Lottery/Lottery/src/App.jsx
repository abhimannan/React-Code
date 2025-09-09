import './App.css';
import Lottery from './Lottery.jsx';
import {sum} from "./helper.js";

function App() {
      let winCondition = (ticket)=>{
        return sum(ticket) === 15; // if you want to change the condition you can change
      }
  return (
    <>
       <h2>Lottery Game</h2>
       <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App;
