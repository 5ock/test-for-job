export const SET_COUNT = 'global/SET_COUNT'
export const SET_TODOLIST = 'global/SET_TODOLIST'

export const setCount = (count) => {
    return {
        type: SET_COUNT,
        count
    }
}

export const setTodoList = (todoList) => {
    return {
        type: SET_TODOLIST,
        todoList
    }
}

const initState = {
    count: 0,
    todoList: []
}

export default (state = initState, action) => {
    if(typeof state === 'undefined')
        return initState
    
    switch(action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.count
            }
        case SET_TODOLIST:
            return {
                ...state,
                todoList: action.todoList
            }
        default:
            return state
    }
}