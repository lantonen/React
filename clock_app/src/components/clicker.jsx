import React from 'react'
import { useState, useEffect } from 'react'

const Clicker = (props) => {
    const [amount, setAmount] = useState(0);

    function isActive(){
        if(props.test){
            addToClicker()
        }
    }

    function addToClicker() {
        setAmount(amount => amount + 1);
    }

    if(amount >= props.times){
        props.completed();
    }

    
    useEffect(() => {
        if(props.isReset === true){
        console.log(props.isReset)
        setAmount(0);
        props.resetGame(false);
    }
    }, [props]
    );


    return (
        <div>
            <div>{amount}</div>
            <button className = "click" onClick={isActive}>Click here</button>
        </div>
    )
}

export default Clicker