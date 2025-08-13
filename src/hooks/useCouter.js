import { useState } from "react"

function useCounter(){
  const [counter, setCount] = useState(0)

  function increaseCount(){
    setCount(prev => prev + 1)
  }

  return {
    counter: counter,
    increaseCount: increaseCount
  }

}

export default useCounter