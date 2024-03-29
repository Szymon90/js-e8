import { TODOLIST_ADD_TODO, TODOLIST_TOGGLE_TODO } from '../constants'

const todos = (state = [], action) => {
    switch (action.type) {
    case TODOLIST_ADD_TODO:
        return [
        ...state,
        {
            id: action.id,
            text: action.text,
            completed: false
        }
        ]
    case TODOLIST_TOGGLE_TODO:
        return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
    default:
        return state
    }
}

export default todos
