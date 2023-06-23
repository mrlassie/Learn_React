import React, { useState, useEffect } from 'react';
import '../styles.css';


const CountdownTimer = () => {
  const [inputTime, setInputTime] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  let countdownInterval;

  const startCountdown = () => {
    if (inputTime.trim() === '') return;

    const totalSeconds = calculateTotalSeconds();
    if (totalSeconds <= 0) return;

    setHours(Math.floor(totalSeconds / 3600));
    setMinutes(Math.floor((totalSeconds % 3600) / 60));
    setSeconds(totalSeconds % 60);

    setIsRunning(true);
  };

  const resetCountdown = () => {
    clearInterval(countdownInterval);
    setIsRunning(false);
    setIsFinished(false);
    setInputTime('');
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const calculateTotalSeconds = () => {
    const [inputHours, inputMinutes, inputSeconds] = inputTime.split(':').map(Number);

    return inputHours * 3600 + inputMinutes * 60 + inputSeconds;
  };

  useEffect(() => {
    if (isRunning) {
      countdownInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(countdownInterval);
              setIsRunning(false);
              setIsFinished(true);
            }
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isRunning, hours, minutes, seconds]);

  return (
    <div className="countdown-timer">
      <h1>Countdown Timer</h1>
      <div className="input-section">
        <input
          type="text"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          placeholder="HH:MM:SS"
          disabled={isRunning}
        />
        <button className="start-btn" onClick={startCountdown} disabled={isRunning}>
          Start
        </button>
      </div>
      <div className="timer-display">
        <div className="timer-section">
          <span>{hours < 10 ? `0${hours}` : hours}</span>
          <span>Hours</span>
        </div>
        <div className="timer-section">
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="timer-section">
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
      {isFinished && (
        <p className="notification">Countdown Finished!</p>
      )}
      {isRunning && (
        <button className="reset-btn" onClick={resetCountdown}>
          Reset
        </button>
      )}
    </div>
  );
};

export default CountdownTimer;
