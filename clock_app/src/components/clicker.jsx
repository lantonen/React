import React from 'react'

const Clicker = (props) => {
    if(props.amount >= props.times){
        props.completed();
    }

    function isActive(){
        if(props.active){
            props.addToClicker()
        }
    }

    return (
        <div>
            <div>{props.amount}</div>
            <button className = "click" onClick={isActive}>Click here</button>
        </div>
    )
}

export default Clicker