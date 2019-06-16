import {
    TODOLIST_SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../constants'

export default (state = VisibilityFilters.SHOW_ALL, { type, filter }) => {
    switch (type) {
    case TODOLIST_SET_VISIBILITY_FILTER:
        return filter
    default:
        return state
    }
}
