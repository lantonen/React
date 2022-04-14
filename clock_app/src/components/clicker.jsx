import React from 'react'
import { useState, useEffect } from 'react'

const Clicker = (props) => {
    const [amount, setAmount] = useState(0);

    function isActive(){
        if(props.test){
            if(amount >= props.times - 1){
                props.completed();
            }
            else{
                addToClicker()
            }
        }
    }

    function addToClicker() {
        setAmount(amount => amount + 1);
    }

    useEffect(() => {
        if(props.isReset === true){
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