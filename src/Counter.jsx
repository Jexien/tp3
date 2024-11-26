import { useState, useCallback } from 'react'



function Counter() {
  const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)

  const handleClick = useCallback(
    () => setCount(count === 9 ? 0 : count + 1)
    , [count]
);

return (
    
    <>
      <p>Score : {score}</p>
      <button
        onClick={handleClick}
        style={{ backgroundColor: count > 5 ? 'green' : 'blue' }}
      >
        count is {count}
      </button>
    </>
)
}

export default Counter