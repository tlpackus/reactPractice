import React from "react";
import ticketImage from "./../img/ticket.png"

function Header() {
  return (
    <React.Fragment>
      <h1>Help Queue</h1> 
      <img src={ticketImage} alt="of tickets" />
    </React.Fragment>
    );
}

export default Header