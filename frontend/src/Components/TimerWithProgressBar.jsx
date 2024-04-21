import React, { useState, useEffect } from 'react';
import './TimerWithProgressBar.css'; // Make sure to create this CSS file

const TimerWithProgressBar = ({ initTime }) => {
    const [timeLeft, setTimeLeft] = useState(initTime);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
                setProgress(((initTime - timeLeft) / initTime) * 100);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timeLeft, initTime]);

    return (
        <div className="timer-container">
            <span className="time-text">{`${Math.floor(timeLeft / 60)}:${('0' + timeLeft % 60).slice(-2)}`}</span>
            <div className="progress-bar-back">
                <div className="progress-bar-fill" style={{width: `${progress}%`}}></div>
            </div>
        </div>
    );
};

export default TimerWithProgressBar;