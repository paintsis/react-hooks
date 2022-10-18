import {useState, useCallback, useEffect} from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    const incrementF =  useCallback(
      (value) => {

        setCounter((valor)=> valor + value )
      },
      [],
    )

    useEffect(() => {
    }, [incrementF])
    
    

   /*  const incrementF = ()=>{
        setCounter(counter++);
    } */

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <br />

        <ShowIncrement increment={ incrementF }  />   
         </>

  )
}
