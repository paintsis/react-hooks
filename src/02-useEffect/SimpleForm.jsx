import React from 'react'
import { useState, useEffect } from 'react';
import { Message } from './Message';
export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username:'paintsis',
    email:'paintsis@gmail.com'
  });

  const {username, email} = formState;

  useEffect(() => {
    console.log('useEffect se llamo')
  }, [])

 
  
  const onInputChange = ({ target }) =>{
    const {name,value} = target
    setformState({...formState, [ name ]: value})
  }

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input type="text" className='form-control' placeholder='Username'  name='username' value={ username } onChange = { onInputChange } />
        <input type="email" className='form-control mt-2' placeholder='paintsis'  name='email' value={ email } onChange = { onInputChange }/>

    {
      (username === 'paintsis') && <Message/>
    }
    </>
  )
}
