import { useState, useEffect } from "react"


function useFetch(url){
const [data, setData] = useState({})
const [loading, setLoading] = useState(true)

  async function fetchData(){
        setLoading(true)
        const res = await fetch(url);
        const data = await res.json()
        console.log(data);
        setData(data);
        setLoading(false)
    }
  useEffect(()=>{
      fetchData()
  }, [url])

  useEffect(()=>{
      setInterval(fetchData, 10*1000)
  }, [])

  return {
    data,
    loading
  }
}


export default useFetch