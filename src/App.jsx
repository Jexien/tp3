import './App.css'
import Counter from './Counter'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')

  const btnplus = () => {
    setEuro(euro + 1);
  };

  const btnmoins = () => {
    setEuro(euro - 1);
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
  <p>{(euro * 1.05).toFixed(1)}</p>
  <button onClick={btnmoins}>-</button>
  <button onClick={btnplus}>+</button>
    </>
  )
}
export default App