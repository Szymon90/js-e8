import {
    PHOTO_FETCH_DATA_SUCCESS
} from '../constants'

export default (state = null, action) => {
    switch (action.type) {
    case PHOTO_FETCH_DATA_SUCCESS:
        return action.data
    default:
        return state
    }
}
