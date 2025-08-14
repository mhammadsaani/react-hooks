import { useState, useEffect } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'
import usePrev from './hooks/usePrev'
import useDebounce from './hooks/useDebounce'


function Fetch() {
  const [currentPost, setCurrentPost] = useState(1)
  const {data, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`)
  console.log(data)
  
  return (
    <>
    <button onClick={()=> setCurrentPost(1)}>1</button>
    <button onClick={()=> setCurrentPost(2)}>2</button>
    <button onClick={()=> setCurrentPost(3)}>3</button>
    <div>{loading ? 'Loading' : JSON.stringify(data)}</div>
    </>
  )
}


function Prev(){
  const [state, setState] = useState(0)
  const prev = usePrev(state)
  return (
    <>
    <div>Current: {state}</div>
    <button onClick={()=>{setState(prev=>prev+1)}}>Add</button>
    <div>Previous: {prev}</div>
    </>
  )
}

function App(){

  function test(){
    console.log('Hi, I am. being called')
  }

  const debouncedFn = useDebounce(test)

  return (
    <>
    <input type="text" onChange={debouncedFn} />
    </>
  )
}

export default App
