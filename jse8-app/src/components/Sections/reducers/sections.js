import {
    SECTIONS_FETCH_DATA_SUCCESS
} from '../constants'

export default (state = [], action) => {
    switch (action.type) {
    case SECTIONS_FETCH_DATA_SUCCESS:
        return action.data
    default:
        return state
    }
}
