import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const List = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo
                key={index}
                {...todo}
                onClick={() => onTodoClick(index)}
            />
        ))}
    </ul>
)

List.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default List
