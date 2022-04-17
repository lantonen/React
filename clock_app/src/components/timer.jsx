import React from 'react'
import { useEffect, useState} from 'react'

const Timer = (props) => {

    const [seconds, setSeconds] = useState(0);
    const [tenth, setTenth] = useState(0);
    const [active, setActive] = useState(false);

    function pauseTimer() {
        setActive(!active);
        if (active === true) {
            props.stopGame();
        }
        else {
            props.runGame();
        }

    }

    useEffect(() => {
        var intervalForThenth;
        if (active) {
            intervalForThenth = setInterval(() => {
                setTenth(tenth => tenth + 1);
            }, 100);
        } else if (!active && seconds !== 0) {
            clearInterval(intervalForThenth);
        }
        return () => clearInterval(intervalForThenth);
    }, [active, seconds]
    );

    useEffect(() => {
        if(props.mode === "Completed"){
            props.print(parseFloat(`${seconds}.${tenth}`));
            resetTimer();
        }
    }
    );
    
    function resetTimer() {
        setActive(false);
        setSeconds(0);
        setTenth(0);
        props.resetGame();
    }

    if(tenth >= 10){
        setSeconds(seconds => seconds + 1);
        setTenth(0);
    }

    return (
        <div>
            <div>{seconds}.{tenth}</div>
            <button className = "start/pause" onClick={pauseTimer}>Start/Pause</button>
            <button className = "reset" onClick={resetTimer}>Reset</button>
        </div>
        
    )
}

export default Timer