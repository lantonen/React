import React from 'react'
import Timer from './components/timer'
import Clicker from './components/clicker'
import { useState } from 'react'

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const times = 10;

  function completed() {
    setIsActive(false);
    setIsCompleted(true);
  }

  function startGame(value){
    setIsActive(value);
  }

  function resetGame(value){
    setIsReset(value);
    setIsCompleted(false);
    setIsActive(false);
  }

  function setC(value, time){
    setIsCompleted(value);
    console.log(`It took you ${time} seconds to click 10 times`);
  }

  return (
    <div>
      <Timer isActive={isActive} isCompleted={isCompleted} startGame={startGame} resetGame={resetGame} setC={setC}></Timer>
      <Clicker isReset={isReset} times={times} test={isActive} completed={completed} resetGame={resetGame} ></Clicker>
    </div>
  )
}

export default App
