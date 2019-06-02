import {SET_SHELL_IS_OPEN} from '../constants';

export default (stateIsShellOpen = true, action) => {
    switch (action.type) {
    case SET_SHELL_IS_OPEN:
    case 'SET_SHELL_IS_OPEN_FROM_HEADER':
        return !stateIsShellOpen;
    default:
        return stateIsShellOpen;
    }
}
