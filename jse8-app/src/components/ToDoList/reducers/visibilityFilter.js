import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../constants';

export default (
    state = VisibilityFilters.SHOW_ALL,
    { type, filter }
) => {
    switch(type) {
    case SET_VISIBILITY_FILTER:
        return filter;
    default:
        return state;
    }
};
