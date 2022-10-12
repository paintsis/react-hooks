import React from 'react'

export const FormWithCustomHook = () => {
  return (
    <>
    <h1>Formulario con custom Hook</h1>
    <hr />
    <input type="text" className='form-control' placeholder='Username'  name='username' value={ username } onChange = { onInputChange } />
    <input type="email" className='form-control mt-2' placeholder='paintsis'  name='email' value={ email } onChange = { onInputChange }/>


</>
  )
}
