import { useContext } from 'react'
import { UserContext } from './context/UserContext';
export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );
  return (
    <>
        <h1>Login Page</h1>
        <hr />
        <pre>
          { JSON.stringify( user ) }
        </pre>

        <button className='btn btn-primary' onClick= { ()=> setUser({id:123,name:'Sherwin', email:'paintsis@gmail.com'})} >
          Establecer usuario
        </button>
    </>
  )
}
