import React from 'react'

const Clicker = (props) => {
    return (
        <div>
            <div>{props.amount}</div>
            <button className = "click" onClick={props.addToClicker}>Click here</button>
            <button className = "reset" onClick={props.resetClicker}>Reset</button>
        </div>
    )
}

export default Clicker