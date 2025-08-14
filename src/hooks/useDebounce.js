import { useRef } from "react";


function useDebounce(org_func){
    let timer = useRef()
    const fn = () => {
        clearTimeout(timer.current)
        timer.current = setTimeout(org_func, 1*1000)
    }
    return fn

}

export default useDebounce