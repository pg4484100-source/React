import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0);



  const addvalue = () => {
    // setcounter(counter => counter +1)
    if (counter < 20) {
      setcounter(counter => counter + 1)
      console.log("add", counter);

    } else {
      alert("maximum limit reched")
    }
  }


  const removevalue = () => {
    // setcounter(counter => counter - 1)
    // console.log("remove", counter);
    if (counter > 0) {
      setcounter(counter => counter - 1)
      console.log("remove", counter);

    } else {
      alert("minimum value reched")
    }
  }
  return (
    <>
      <h1>chai or react</h1>
      <h3>counter value : {counter}</h3>
      <button
        onClick={addvalue}>Add Value{counter}</button>
      <br />
      <button
        onClick={removevalue}>Remove Value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
