import React, { useState } from 'react';

function DiceRoller() {
  const [dieResult, setDieResult] = useState(null);
  const [customDieResult, setCustomDieResult] = useState(null);
  const [customDieDetails, setCustomDieDetails] = useState([]); // Store details for custom die rolls
  const [numDice, setNumDice] = useState(1);
  const [numSides, setNumSides] = useState(6);
  const [modifier, setModifier] = useState(0);

  // Function to simulate rolling a single die
  const rollDice = (sides) => {
    return Math.floor(Math.random() * sides) + 1; // Return result instead of setting state
  };

  // Function to handle the rolling of multiple dice with modifiers
  const rollCustomDice = () => {
    let total = 0;
    let rolls = []; // To track individual rolls
    // Roll the specified number of dice
    for (let i = 0; i < numDice; i++) {
      const roll = rollDice(numSides);
      rolls.push(roll); // Store individual die roll
      total += roll;
    }
    // Apply the modifier
    total += parseInt(modifier, 10);
    setCustomDieDetails({ rolls, modifier, total }); // Store rolls, modifier, and total
    setCustomDieResult(total); // Set result once, after calculation
  };

  return (
    <div className="RollDice space">
      <h1>Dice Roller</h1>
      <p>Need a quick dice roller? Or need custom dice? You can roll any type of dice here.</p>

      {/* Predefined dice rolls */}
      <button className="btn btn-secondary btn-sm" onClick={() => setDieResult(rollDice(4))}>1d4</button>
      <button className="btn btn-secondary btn-sm buttonMargin" onClick={() => setDieResult(rollDice(6))}>1d6</button>
      <button className="btn btn-secondary btn-sm buttonMargin" onClick={() => setDieResult(rollDice(8))}>1d8</button>
      <button className="btn btn-secondary btn-sm buttonMargin" onClick={() => setDieResult(rollDice(10))}>1d10</button>
      <button className="btn btn-secondary btn-sm buttonMargin" onClick={() => setDieResult(rollDice(12))}>1d12</button>
      <button className="btn btn-secondary btn-sm buttonMargin" onClick={() => setDieResult(rollDice(20))}>1d20</button>
      <button className="btn btn-secondary btn-sm buttonMargin" onClick={() => setDieResult(rollDice(100))}>1d100</button>

      <h3>Result: {dieResult}</h3>

      {/* Custom Dice Roller */}
      <div>
        <h3>Custom Dice</h3>
        <label>
          Number of Dice:
          <input
            type="number"
            value={numDice}
            onChange={(e) => setNumDice(Math.max(1, parseInt(e.target.value)))}
            min="1"
          />
        </label>
        <br />
        <label>
          Sides per Die:
          <input
            type="number"
            value={numSides}
            onChange={(e) => setNumSides(Math.max(2, parseInt(e.target.value)))}
            min="2"
          />
        </label>
        <br />
        <label>
          Modifier:
          <input
            type="number"
            value={modifier}
            onChange={(e) => setModifier(e.target.value)}
          />
        </label>
        <br />
        <button className="btn btn-secondary btn-sm" onClick={rollCustomDice}>
          Roll Custom Dice
        </button>
      </div>

      {/* Display Custom Dice Result */}
      {customDieDetails.rolls && (
        <div>
          <h3>Custom Dice Rolls:</h3>
          <ul>
            {customDieDetails.rolls.map((roll, index) => (
              <li key={index}>{roll}</li>
            ))}
          </ul>
          <h4>Modifier: {customDieDetails.modifier}</h4>
          <h3>Total: {customDieDetails.total}</h3>
        </div>
      )}
    </div>
  );
}

export default DiceRoller;
