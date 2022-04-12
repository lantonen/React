import React from 'react'
import { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [active, setActive] = useState(false);

    function pause() {
        setActive(!active);
    }
    
    function reset() {
        setSeconds(0);
        setActive(false);
    }

    useEffect(() => {
        var interval;
        if (active) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!active && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [active, seconds]
    );

    return (
        <div>
            <div>{seconds}</div>
            <button className = "start/pause" onClick={pause}>Start/Pause</button>
            <button className = "reset" onClick={reset}>Reset</button>
        </div>
        
    )
}

export default Timer