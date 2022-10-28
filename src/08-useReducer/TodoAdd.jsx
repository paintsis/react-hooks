import React from 'react'
import  {  useForm } from '../hooks/useForm'
export const TodoAdd = ( { onNewTodo } ) => {

        const { description, onInputChange, onResetForm } = useForm({
            description: ''
        });

        const onFormSubmit = (event) => {
            event.preventDefault();
            if(description.length <= 1) {
                return;
            }
            const newTodo = {
                id: new Date().getTime(),
                description: description,
                done:false
            }

             onNewTodo(newTodo);
        }
  return (
    <>
        <form onSubmit={ onFormSubmit }>
            <input type="text" placeholder='Que hay que hacers' className='form-control' value={ description } onChange = { onInputChange} name="description"/>
            <button type='submit' className='btn btn-outline-primary mt-1'> Agregar </button>
        </form>
    </>
  )
}
