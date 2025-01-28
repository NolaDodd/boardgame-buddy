import React from "react";
import {useNavigate} from "react-router-dom"
import "./Header.css"

function Header() {

    let navigate = useNavigate()

  return (
    <div className="Header" style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
      }}>

      <img src="./boardgamebuddylogo2.png" style={{maxWidth: "90%"}} onClick={() => navigate(`/`)} alt="logo of Boardgame Buddy app"/>

        <div className="space">
            <button className= "btn btn-danger buttonMargin " onClick={() => navigate(`/counter`)}>Counter</button>
            <button className="btn btn-warning buttonMargin" onClick={() => navigate(`/picker`)}>Player Picker</button>
            <button className="btn btn-success buttonMargin" onClick={() => navigate(`/roll`)}>Dice Roller</button>
            <button className="btn btn-primary buttonMargin" onClick={() => navigate(`/timer`)}>Timer</button>
            <button className="btn btn-secondary buttonMargin" onClick={() => navigate(`/rules`)}>Rules Library</button>
        </div>


    </div>
  );
}

export default Header;