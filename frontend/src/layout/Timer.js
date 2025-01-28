import React, { useState, useEffect } from 'react';

function Timer() {
  // Stopwatch state
  const [stopwatch, setStopwatch] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Countdown state
  const [countdown, setCountdown] = useState(0);
  const [countdownRunning, setCountdownRunning] = useState(false);

  // Start/Stop Stopwatch
  const toggleStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalId);
    } else {
      const id = setInterval(() => {
        setStopwatch(prevTime => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
    setIsRunning(!isRunning);
  };

  // Reset Stopwatch
  const resetStopwatch = () => {
    setStopwatch(0);
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };

  // Start Countdown Timer
  const startCountdown = () => {
    if (countdown > 0 && !countdownRunning) {
      setCountdownRunning(true);
      const id = setInterval(() => {
        setCountdown(prevTime => {
          if (prevTime <= 1) {
            clearInterval(id);
            setCountdownRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  // Reset Countdown Timer
  const resetCountdown = () => {
    setCountdown(0);
    setCountdownRunning(false);
  };

  // Handle input for countdown timer
  const handleCountdownChange = (e) => {
    setCountdown(e.target.value);
  };

  return (
    <div className="Timer space">
        <h1>Timer</h1>
        <p>Need a quick timer?</p>
      {/* Stopwatch */}
      <div>
        <h3>Stopwatch</h3>
        <p>Time: {stopwatch}s</p>
        <button className="btn btn-secondary btn-sm" onClick={toggleStopwatch}>
          {isRunning ? 'Stop' : 'Start'} Stopwatch
        </button>
        <button className="btn btn-secondary btn-sm buttonMargin" onClick={resetStopwatch}>Reset Stopwatch</button>
      </div>

      {/* Countdown Timer */}
      <div>
        <h3>Countdown Timer</h3>
        <input
          type="number"
          value={countdown}
          onChange={handleCountdownChange}
          disabled={countdownRunning}
          placeholder="Enter time in seconds"
        />
        <button className="btn btn-secondary btn-sm buttonMargin" onClick={startCountdown} disabled={countdownRunning || countdown <= 0}>
          Start Countdown
        </button>
        <button className="btn btn-secondary btn-sm buttonMargin" onClick={resetCountdown}>Reset Countdown</button>
        <p>Time left: {countdown}s</p>
      </div>
    </div>
  );
}

export default Timer;