export const todoReducer = ( initailState, action)=>{
    switch(action.type){
        case '[TODO] Add Todo' : {
            //throw new Error('Action.type = ABC no esta implementada')
            return [
                ...initailState, action.payload
            ]
            //break;
        }
        default : return initailState

    }
}