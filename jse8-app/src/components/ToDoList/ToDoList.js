import React from 'react'
import Footer from './Footer'
import AddTodo from './components/AddTodoContainer'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoList = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default TodoList
