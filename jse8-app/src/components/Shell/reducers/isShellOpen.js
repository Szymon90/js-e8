export default (stateIsShellOpen = false, action) => {
    switch (action.type) {
    case 'SET_SHELL_IS_OPEN':
        return !stateIsShellOpen;
    default:
        return stateIsShellOpen;
    }
}
