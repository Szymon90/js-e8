import {SET_SHELL_IS_OPEN} from '../constants';

export default () => {
    console.log('ACTION -> ', SET_SHELL_IS_OPEN);
    return ({
    type: SET_SHELL_IS_OPEN
});
}
