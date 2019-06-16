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
    }
}

const mapStateToProps = ({todoList: {todos = [], visibilityFilter}}) => ({
    todos: getVisibleTodos(todos, visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
