import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(0)

  // const addValue = () => {
  //   setCounter(prevCounter => prevCounter + 1)
  // }

  // const removeValue = () => {
  //   setCounter(counter - 1)
  // }

  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1)
    }
  }

  return (
    <>
      <h1>Count the no.</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value </button> 
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value </button>
      <p>Min_Value = 0 || Max_Value = 20</p>
    </>
  )
}

export default App
