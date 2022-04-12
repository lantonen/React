import React from 'react'
import { useEffect } from 'react'

const Timer = (props) => {

    useEffect(() => {
        var interval;
        if (props.active) {
            interval = setInterval(() => {
                props.setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!props.active && props.seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [props]
    );

    return (
        <div>
            <div>{props.seconds}</div>
            <button className = "start/pause" onClick={props.pauseTimer}>Start/Pause</button>
            <button className = "reset" onClick={props.resetTimer}>Reset</button>
        </div>
        
    )
}

export default Timer