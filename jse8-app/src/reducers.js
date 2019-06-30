import {
    combineReducers
} from 'redux';

import { isShellOpen } from './components/Shell/reducers';
//import todoList from './components/TodoList/reducers';
import { sections } from './components/Sections/reducers';
import { photos } from './components/Section/reducers';
import { photo } from './components/Photo/reducers';
import { reducer as formreducer } from 'redux-form';

export default combineReducers({
    form: formreducer,
    isShellOpen,
    //todoList,
    photos,
    photo,
    sections
});
