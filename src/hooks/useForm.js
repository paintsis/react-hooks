import {useEffect, useState} from 'react'

export const useForm = (inialForm = {}) => {
    const [formState, setFormState] = useState(inialForm);
  
    const onInputChange = ({ target }) =>{
      const {name, value} = target;
        setFormState({...formState, [ name ]: value})
      }


    const onResetForm = ()=>{
        setFormState(inialForm);
    }

    return {
        ...formState,
        formState, 
        onInputChange,
        onResetForm
         }
}
