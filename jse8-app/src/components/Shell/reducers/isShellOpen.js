import {SET_SHELL_IS_OPEN} from '../constants';

export default (stateIsShellOpen = true, action) => {
    switch (action.type) {
    case SET_SHELL_IS_OPEN:
        return !stateIsShellOpen;
    default:
        return stateIsShellOpen;
    }
}
