import React, { useState } from 'react'

function App() {
  const [counter,setCounter] = useState(0)
  const Increment=()=>{
  if (counter <5 ){
    setCounter(counter+1)
  }
}

  const Decrement=()=>{
  if (counter >-5 ){
  setCounter(counter-1)
}
}
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default App