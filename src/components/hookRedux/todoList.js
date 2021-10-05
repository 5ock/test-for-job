import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const TodoList = React.memo(() => {
    const app = useSelector(state => state.app)

    const renderTodoList = () => _.map(app.todoList, item => <li key={item}>{item}</li>)

    return (<>
        <div>{'Todolist Total:' + app.count}</div>
        <ul>{renderTodoList()}</ul>
    </>)
})

export default TodoList