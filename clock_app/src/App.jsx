import React from 'react'
import Timer from './components/timer'
import Clicker from './components/clicker'
import { useState } from 'react'

const App = () => {
  const [amount, setAmount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tenth, setTenth] = useState(0);
  const [active, setActive] = useState(false);
  const times = 10;

  function completed() {
    pauseTimer();
    console.log(`It took you ${seconds}.${tenth} seconds to click ${times} times`);
    resetTimer();
    setAmount(0);
  }

  function addToClicker() {
    setAmount(amount => amount + 1);
  }
  function pauseTimer() {
    setActive(!active);
  }

  function resetTimer() {
    setActive(false);
    setSeconds(0);
    setTenth(0);
  }

  if(tenth >= 10){
    setSeconds(seconds => seconds + 1);
    setTenth(0);
}

if(amount >= times){
  completed();
}

  return (
    <div>
      <Timer seconds={seconds} tenth={tenth} setSeconds={setSeconds} setTenth={setTenth} active={active} pauseTimer={pauseTimer} resetTimer={resetTimer} ></Timer>
      <Clicker amount={amount} times={times} addToClicker={addToClicker} active={active}></Clicker>
    </div>

  )
}

export default App
