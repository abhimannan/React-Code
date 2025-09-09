import { useState } from "react";
import {generateArr , sum} from "./helper.js";
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";
import "./Lottery.css";


function Lottery({ n = 3, winCondition }) {
  const [ticket, setTicket] = useState(generateArr(n));
  let isWinning = winCondition(ticket);

  let handleClick = () => {
    setTicket(generateArr(n));
  };

  return (
    <div className="lottery-container">
      <div className="lottery-card">
        <div className="ticket-box">
          <Ticket ticket={ticket} />
        </div>

        <button className="lottery-btn" onClick={handleClick}>
          Generate Ticket 🎲
        </button>

        {isWinning && <h3 className="win-message">🎉 Yes! You Got Lucky Lottery...</h3>}
      </div>
    </div>
  );
}
export default Lottery;