import { useReducer,useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
const init = ()=>{
    return  JSON.parse(localStorage.getItem('todos')) || [];
  }

export const useTodo = () => {

    const [ todos, dispatch] = useReducer(todoReducer , [], init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

//!remove todo
    const handleDeleteTodo = (id)=> {
        dispatch({
          type: '[TODO] Remove Todo',
          payload: id        
        }); 
    }
//!add todo
    const handleNewTodo = ( todo ) => {
     const action = {
      type: '[TODO] Add Todo',
      payload: todo
     }
     dispatch( action );
    }


  const handleToggleTodo = (id)=> {
    console.log(id)
      dispatch({
        type: '[TODO] Toggle Todo',
        payload: id        
      }); 
  }

  const todosCount = ()=>{
    return todos.length
  }

  const pendingTodosCount = ()=>{
    return todos.filter(todo => !todo.done).length
  }

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo, handleDeleteTodo, handleNewTodo, handleToggleTodo
  }
}

