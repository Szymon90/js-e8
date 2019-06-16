import { combineReducers } from 'redux';

import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoList = combineReducers({
    todos,
    visibilityFilter
})

export default todoList
