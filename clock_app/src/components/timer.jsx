import React from 'react'
import { useEffect } from 'react'

const Timer = (props) => {

    

    useEffect(() => {
        var intervalForThenth;
        if (props.active) {
            intervalForThenth = setInterval(() => {
                props.setTenth(tenth => tenth + 1);
            }, 100);
        } else if (!props.active && props.seconds !== 0) {
            clearInterval(intervalForThenth);
        }
        return () => clearInterval(intervalForThenth);
    }, [props]
    );
    
    if(props.tenth >= 10){
        props.setSeconds(seconds => seconds + 1);
        props.setTenth(0);
    }

    return (
        <div>
            <div>{props.seconds}.{props.tenth}</div>
            <button className = "start/pause" onClick={props.pauseTimer}>Start/Pause</button>
            <button className = "reset" onClick={props.resetTimer}>Reset</button>
        </div>
        
    )
}

export default Timer