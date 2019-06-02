import {
    combineReducers
} from 'redux';

import { isShellOpen } from './components/Shell/reducers';

export default combineReducers({
    isShellOpen
});
