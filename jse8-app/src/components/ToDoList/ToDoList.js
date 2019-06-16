import React from 'react';
import styled from 'styled-components';
import {
    AddTodo,
    Footer,
    VisibleTodoList,
} from './components'

const ToDoList = () => (
    <Wrapper>
        <header>
            <h3>Todo list</h3>
        </header>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </Wrapper>
);

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 86px;
`

export default ToDoList;
