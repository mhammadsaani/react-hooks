import { useEffect } from "react";
import { useState, useRef } from "react";

// useRef, if a value is stored in useRef, the component doesn't rerender, think of it as opposite of useState

function usePrev(state){
    const ref = useRef()

    useEffect(()=>{
        ref.current = state
    }, [state])


    return ref.current
}

// returns the value first, then useEffect gets called
// 1, usePrev got called with a state, then ref.current is returned which is undefined at this point
// then, useEffect is called which set the ref.current to the state it was called with, 
// as useRef is used, so no component re-renders happen



export default usePrev