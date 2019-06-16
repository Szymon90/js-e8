import { TODOLIST_ADD_TODO } from '../constants'
let nextTodoId = 0
export default text => ({
    type: TODOLIST_ADD_TODO,
    id: nextTodoId += 1,
    text
})
