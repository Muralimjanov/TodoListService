const initislSate = {
    todos: []
}


export const todoReducer = (state = initislSate, action) => {
    const {payload, type}= action
    switch(type) {
        case 'ADD_TODO': {
            const newItem = {
                id: Date.now(),
                title: payload,
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos,newItem],
            }
        }
        default: 
            return state
    }
}