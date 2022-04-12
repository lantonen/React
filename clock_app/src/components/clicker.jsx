import React from 'react'
import { useState } from 'react'

const Clicker = () => {
    const [amount, setAmount] = useState(0);

    function reset() {
        setAmount(0);
    }

    function add() {
        setAmount(amount => amount + 1);
    }


    return (
        <div>
            <div>{amount}</div>
            <button className = "click" onClick={add}>Click here</button>
            <button className = "reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default Clicker