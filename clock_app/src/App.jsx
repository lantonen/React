import React from 'react'
import Timer from './components/timer'
import Clicker from './components/clicker'
import { useState } from 'react'

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isReset, setIsReset] = useState(false);

  let time = 0.0;
  const times = 10;

  function completed() {
    //console.log(`It took you ${seconds}.${tenth} seconds to click ${times} times`);
    setIsActive(false);
  }

  function startGame(value){
    setIsActive(value);
  }

  function resetGame(value){
    setIsReset(value);
  }

  return (
    <div>
      <Timer startGame={startGame} resetGame={resetGame}></Timer>
      <Clicker isReset={isReset} times={times} test={isActive} completed={completed} resetGame={resetGame}></Clicker>
    </div>
  )
}

export default App
