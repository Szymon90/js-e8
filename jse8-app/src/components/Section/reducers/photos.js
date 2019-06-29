import {
    SECTION_FETCH_DATA_SUCCESS
} from '../constants'

export default (state = [], action) => {
    switch (action.type) {
    case SECTION_FETCH_DATA_SUCCESS:
        return action.data
    default:
        return state
    }
}
