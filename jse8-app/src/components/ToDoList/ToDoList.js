import React from 'react'
import styled from 'styled-components'
import Footer from './components/Footer'
import AddTodo from './components/AddTodoContainer'
import List from './components/ListContainer'

const TodoList = () => (
    <Wrapper>
        <AddTodo />
        <List />
        <Footer />
    </Wrapper>
)

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 86px;
`

export default TodoList
