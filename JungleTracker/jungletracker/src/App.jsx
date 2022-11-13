import React from 'react'
import Timer from './components/timer'
import ChampSelect from './components/champSelect'
import { useState } from 'react'

const App = () =>{
  
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
      <h1>Jungle Tracker</h1>
      <Timer mode={mode} runGame={runGame} resetGame={resetGame} stopGame={stopGame} print={printCompleteTime} ></Timer>
      <ChampSelect></ChampSelect>
    </div>
  )
}

export default App;
