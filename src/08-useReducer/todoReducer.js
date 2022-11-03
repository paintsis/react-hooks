export const todoReducer = ( initailState, action)=>{
    switch(action.type){
        case '[TODO] Add Todo' : {
            //throw new Error('Action.type = ABC no esta implementada')
            return [
                ...initailState, action.payload
            ]
            //break;
        }
        case '[TODO] Remove Todo':{
            return initailState.filter( todo => todo.id != action.payload);
        }
        case '[TODO] Toggle Todo':{
            return initailState.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done:!todo.done
                    }
                }

                return todo
            });
        }

        default : return initailState

    }
}