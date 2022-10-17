import React from 'react'
import { useLayoutEffect } from 'react'
import { useFetch ,useCounter } from '../hooks'
import { Quote, LoadingQuote} from '../03-examples/'

export const Layout = () => {
  const {counter, increment,reset} = useCounter(1)
  const {data,isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {author, quote} = !!data && data[0];
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

    {
      isLoading ? (<LoadingQuote/>):(<Quote author={ author } quote={ quote }/>)
    }
  
  <button  onClick={ ()=> increment() }  disabled = { isLoading } className='btn btn-primary'>
    Next quote
  </button>
   

    </>
    )
}
