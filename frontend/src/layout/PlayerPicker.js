import React, { useState } from "react";

function PlayerPicker() {
  const [numPlayers, setNumPlayers] = useState(1);
  const [numTeams, setNumTeams] = useState(1); 
  const [firstPlayer, setFirstPlayer] = useState(null);
  const [teams, setTeams] = useState([]);

  const handleNumPlayersChange = (event) => {
    const value = event.target.value;
    setNumPlayers(Number(value) || 0);
  };

  const handleNumTeamsChange = (event) => {
    const value = event.target.value;
    setNumTeams(Number(value) || 1); 
  };

  const pickFirstPlayer = () => {
    if (numPlayers > 0) {
      const players = Array.from({ length: numPlayers }, (_, i) => `Player ${i + 1}`);
      const randomIndex = Math.floor(Math.random() * players.length);
      setFirstPlayer(players[randomIndex]);
    }
  };

  const assignTeams = () => {
    if (numPlayers > 0 && numTeams > 0) {
      const players = Array.from({ length: numPlayers }, (_, i) => `Player ${i + 1}`);
      const shuffledPlayers = players.sort(() => Math.random() - 0.5);

      // Create empty teams array
      let newTeams = Array.from({ length: numTeams }, () => []);
      
      // Distribute players into teams
      shuffledPlayers.forEach((player, index) => {
        newTeams[index % numTeams].push(player);
      });

      setTeams(newTeams);
    }
  };

  return (
    <div className="PlayerPicker space">
      <h1>Player Picker</h1>
      <p>Can't decide who goes first? Need to split players into teams? Let the player picker help!</p>

      <h3>Enter the number of players</h3>
      <div>
        <input
        type="number"
        value={numPlayers}
        onChange={handleNumPlayersChange}
        placeholder="Number of players"
        min="1"
      />
      
        <button className="btn btn-secondary btn-sm buttonMargin" onClick={pickFirstPlayer}>Pick First Player</button>
        {firstPlayer && <h4>{firstPlayer} will go first!</h4>}
      </div>

      <h3>How many teams?</h3>
      <input
        type="number"
        value={numTeams}
        onChange={handleNumTeamsChange}
        placeholder="Enter number of teams"
        min="1"
      />

      <button className="btn btn-secondary btn-sm buttonMargin" onClick={assignTeams}>Assign Teams</button>

      {teams.length > 0 && (
        <div>
          {teams.map((team, index) => (
            <div key={index}>
              <h3>Team {index + 1}:</h3>
              <ul>
                {team.map((player, idx) => (
                  <li key={idx}>{player}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlayerPicker;
