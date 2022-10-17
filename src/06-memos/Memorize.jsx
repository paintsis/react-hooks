import React from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
   const {counter, increment} = useCounter(10)
  return (
<>
    <h1>Counter: <Small value={ counter }/></h1>
    <hr />
    <button onClick={ ()=> increment() }  className='btn btn-primary' >
        +1
    </button>
</>  )
}
