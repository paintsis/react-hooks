const initailState = [
    {
        id:1,
        todo:'Recolectar las piedras del Alma',
        done: false,
    }
];


const todoReducer = (state = initailState, action = {}   ) =>{
    
    if(action.type === '[TODO] add todo'){
        return [...state,action.payload]
    }
    return state;
}
const newTodo =   {
    id:1,
    todo:'Recolectar las piedras del Poder',
    done: false,
}

let todos = todoReducer();

const addTodoAction = {
    type:'[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction )
console.log(todos)