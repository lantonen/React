import React from 'react'
import Timer from './components/timer'
import Clicker from './components/clicker'
import { useState } from 'react'

const App = () => {

  //Pause, Running, Resetting, Completed
  const [mode, setMode] = useState("Pause");
  const times = 10;

  function completed() {
    setMode("Completed")
  }

  function runGame(){
    setMode("Running")
  }

  function stopGame(){
    setMode("Pause")
  }

  function resetGame(){
    setMode("Resetting")
  }

  function printCompleteTime(time){
    console.log(`It took you ${time} seconds to click ${times} times`);
  }

  return (
    <div>
      <Timer mode={mode} runGame={runGame} resetGame={resetGame} stopGame={stopGame} print={printCompleteTime} ></Timer>
      <Clicker mode={mode} times={times} completed={completed} resetGame={resetGame} stopGame={stopGame} ></Clicker>
    </div>
  )
}

export default App
