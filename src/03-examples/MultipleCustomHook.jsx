import React from 'react'
import { useFetch } from '../hooks/useFetch'
import {useCounter} from '../hooks/useCounter'
import { Quote } from './Quote'
import { LoadingQuote } from './LoadingQuote'

export const MultipleCustomHook = () => {
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
