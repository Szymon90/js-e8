import {
    combineReducers
} from 'redux';

import { isShellOpen } from './components/Shell/reducers';
import todoList from './components/TodoList/reducers';
import { sections } from './components/Sections/reducers';

export default combineReducers({
    isShellOpen,
    todoList,
    sections
});
