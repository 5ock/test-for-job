import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCount, setTodoList } from '../../redux/app'

const AddTodo = React.memo(() => {
    // get redux data
    const app = useSelector(state => state.app)
    const dispatch = useDispatch()

    // state
    const [ item, setItem ] = useState()
    
    const handleCreateTodo = () => {
        if(item === '')
            return

        dispatch(setTodoList([...app.todoList, item]))
        dispatch(setCount(app.count + 1))
        setItem('')
    }

    const handleReset = () => {
        dispatch(setTodoList([]))
        dispatch(setCount(0))
        setItem()
    }

    return (<>
        <input value={item} onChange={e => setItem(e.target.value)} />
        <button onClick={handleCreateTodo}>Create New Item</button>
        <button onClick={handleReset}>Reset Todo</button>
    </>)
})

export default AddTodo