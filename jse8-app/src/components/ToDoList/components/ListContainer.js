import { compose } from 'redux'
import { connect } from 'react-redux'
import { VisibilityFilters } from '../constants'
import { toggleTodo } from '../actions'
import List from './List'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
    case VisibilityFilters.SHOW_ALL:
        return todos
    case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
    default:
        throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = ({todoList}) => ({
    todos: getVisibleTodos(
        todoList.todos,
        todoList.visibilityFilter
    )
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: compose(dispatch, toggleTodo)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
