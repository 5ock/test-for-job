import React from 'react'

import AddTodo from './addTodo'
import TodoList from './todoList'

const Father = React.memo(() => {
    // return <div>123</div>
    
    return (<>
        <AddTodo />
        <TodoList />
    </>)
})

export default Father