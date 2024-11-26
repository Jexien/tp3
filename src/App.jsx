import './App.css'
import { useState } from 'react'

function App() {
  const [Value, setValue] = useState('')

  const btnplus = () => {
    setValue(Value + 1);
  };

  const btnmoins = () => {
    setValue(Value - 1);
  };

  return (
    <>
    {/* <Counter /> */}

    <input
  type="number"
  value={value} 
  onChange={(event) => {
  setValue(event.target.value)
  }}
  />
  <p>{(Value * 1.05).toFixed(1)}</p>
  <button onClick={btnmoins}>-</button>
  <button onClick={btnplus}>+</button>
    </>
  )
}
export default App