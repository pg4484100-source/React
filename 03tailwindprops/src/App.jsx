import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'


function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "gautam",
    age: 21
  }
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500">
        Tailwind is Working ✅</h1>
      <Card username="Gautam" btntxt="click me" />
      <Card username="sonu" />
    </>
  );
}

export default App
