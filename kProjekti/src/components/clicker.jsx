import React from 'react'
import { useState, useEffect } from 'react'

const Clicker = (props) => {
    const [amount, setAmount] = useState(0);

    function isActive() {
        if (props.mode === "Running") {
            if (amount >= props.times - 1) {
                props.completed();
            }
            else {
                addToClicker()
            }
        }
    }

    function addToClicker() {
        setAmount(amount => amount + 1);
    }

    useEffect(() => {
        if (props.mode === "Resetting") {
            setAmount(0);
            props.stopGame();
        }
    }, [props.mode]
    );


    return (
        <div>
            <div>{amount}</div>
            <button className="click" onClick={isActive}>Click here</button>
        </div>
    )
}

export default Clicker