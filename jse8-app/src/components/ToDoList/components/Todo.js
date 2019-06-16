import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Todo = ({ onClick, completed, text }) => (
    <Li onClick={onClick}>
        {text}
    </Li>
)

const Li = styled.li`
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
