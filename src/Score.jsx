import { useState, useCallback } from 'react'

function Score() {
    const [Score, setScore] = useState(0)
  
    const handleClick = useCallback(
      () => setScore(Score === 9 ? 0 : Score + 1)
      , [Score]
  );
  
  return (
      
          <button onClick={handleClick} style={{ backgroundColor: Score > 5 ? 'pink' : 'red' }}>
              Score is {Score}
          </button>
  )
  }

  export default Score