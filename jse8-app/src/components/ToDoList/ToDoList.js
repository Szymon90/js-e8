import React from 'react'
import Footer from './components/Footer'
import AddTodo from './components/AddTodoContainer'
import List from './components/ListContainer'

const TodoList = () => (
    <div>
        <AddTodo />
        <List />
        <Footer />
    </div>
)

export default TodoList
