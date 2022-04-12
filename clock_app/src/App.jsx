import React from 'react'
import Timer from './components/timer'
import Clicker from './components/clicker'
import { useState } from 'react'

const App = () => {
  const [amount, setAmount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  function resetClicker() {
    setAmount(0);
  }

  function addToClicker() {
    setAmount(amount => amount + 1);
  }
  function pauseTimer() {
    setActive(!active);
  }

  function resetTimer() {
    setSeconds(0);
    setActive(false);
  }

  return (
    <div>
      <Timer seconds={seconds} setSeconds={setSeconds} active={active} pauseTimer={pauseTimer} resetTimer={resetTimer} ></Timer>
      <Clicker amount={amount} resetClicker={resetClicker} addToClicker={addToClicker}></Clicker>
    </div>

  )
}

export default App
