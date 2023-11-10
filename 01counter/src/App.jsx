import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // return a array with a variable and a functin
  // that function is used to update the varable
  let [counter, setCounter] = useState(0);

  const addValue =()=>{
    if(counter < 20){
      setCounter(counter + 1);
    }
  }
  const removeValue = ()=>{
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai or react {counter}</h1>
      <h2>Counter value is : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <br /><br />
      <p>footer : {counter}</p>
    </>
  )
}

export default App
