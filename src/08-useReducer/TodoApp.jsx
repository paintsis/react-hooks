import {useReducer, useEffect} from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'


const initailStates = [
  
]

const init = ()=>{
  return  JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodo();
  return (
    <>
        <h1>TodoApp: { todosCount() } <small>pendientes: { pendingTodosCount() }</small></h1>
        <hr />
        <div className="row">
          <div className="col-7">
          <TodoList  onToggleTodo={ handleToggleTodo }  todos={ todos} onDeleteTodo = {  handleDeleteTodo } />
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
