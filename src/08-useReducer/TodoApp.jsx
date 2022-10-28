import {useReducer} from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import {todoReducer} from './todoReducer'
const initailStates = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false

  },
  {
    id: new Date().getTime()*2,
    description: 'Recolectar la piedra del alma',
    done: false

  }
]



export const TodoApp = () => {
    const [ todos, dispatch] = useReducer(todoReducer , initailStates)
    const handleNewTodo = ( todo ) => {
     const action = {
      type: '[TODO] Add Todo',
      payload: todo
     }
     dispatch( action );
    }
  return (
    <>
        <h1>TodoApp: 10 <small>pendientes: 2</small></h1>
        <hr />
        <div className="row">
          <div className="col-7">
          <TodoList todos={ todos}/>
          </div>
          <div className="col-5">
              <h4>Agregar Todo</h4>
              <hr />
              <TodoAdd onNewTodo={ handleNewTodo }> </TodoAdd>
          </div>
        </div>
        
    </>
  )
}
