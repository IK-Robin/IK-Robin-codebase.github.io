import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState('');
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setIsActive(false);
    setSeconds();
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setTimeout(() => {
        setSeconds( ()=> reset());
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={()=> toggle()}>
          {isActive ? 'copeid' : 'copy'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;