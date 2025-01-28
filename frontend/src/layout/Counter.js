import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  // State to store an array of counters
  const [counters, setCounters] = useState([]);
  const [countName, setCountName] = useState(""); // Input for counter name
  const [countValue, setCountValue] = useState(0); // Default counter value

  // Handle changes in the counter name input field
  const handleCountNameChange = (event) => {
    const value = event.target.value;
    setCountName(value);
  };

  // Function to create a new counter
  const createCounter = () => {
    if (countName.trim()) {
      const newCounter = { name: countName, value: countValue };
      setCounters([...counters, newCounter]);
      setCountName(""); // Reset the counter name input
    }
  };

  // Function to update counter value (increment, decrement)
  const updateCounter = (index, change) => {
    setCounters(prevCounters =>
      prevCounters.map((counter, idx) =>
        idx === index ? { ...counter, value: counter.value + change } : counter
      )
    );
  };

  // Function to reset a specific counter's value
  const resetCounter = (index) => {
    setCounters(prevCounters =>
      prevCounters.map((counter, idx) =>
        idx === index ? { ...counter, value: 0 } : counter
      )
    );
  };

  // Function to delete a specific counter
  const deleteCounter = (index) => {
    setCounters(prevCounters => prevCounters.filter((_, idx) => idx !== index));
  };

  return (
    <div className="Counter space">
      <h1>Counters</h1>
      <p>Create counters to keep track of pieces, victory points, or whatever else you need!</p>

      {/* Input field to create new counters */}
      <input
        type="text"
        value={countName}
        onChange={handleCountNameChange}
        placeholder="Counter Name"
      />
      <button className="buttonMargin btn btn-secondary btn-sm" onClick={createCounter}>
        Create New Counter
      </button>

      {/* List of all counters */}
      <div>
        {counters.length === 0 ? (
          <p>No counters created yet.</p>
        ) : (
          counters.map((counter, index) => (
            <div key={index} className="counterItem">
              <h3>{counter.name}</h3>
              <h5>Value: {counter.value}</h5>
              <button className="btn btn-secondary btn-sm" onClick={() => updateCounter(index, -1)}>
                -1
              </button>
              <button className="btn btn-secondary btn-sm buttonMargin" onClick={() => updateCounter(index, -10)}>
                -10
              </button>
              <button className="btn btn-secondary btn-sm buttonMargin" onClick={() => updateCounter(index, 1)}>
                +1
              </button>
              <button className="btn btn-secondary btn-sm buttonMargin" onClick={() => updateCounter(index, 10)}>
                +10
              </button>
              <button className="btn btn-info btn-sm buttonMargin" onClick={() => resetCounter(index)}>
                Reset
              </button>
              <button className="btn btn-danger btn-sm buttonMargin" onClick={() => deleteCounter(index)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Counter;
