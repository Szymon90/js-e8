import {
    combineReducers
} from 'redux';

import { isShellOpen } from './components/Shell/reducers';
//import todoList from './components/TodoList/reducers';
import { sections } from './components/Sections/reducers';
import { photos } from './components/Section/reducers';

export default combineReducers({
    isShellOpen,
    //todoList,
    photos,
    sections
});
