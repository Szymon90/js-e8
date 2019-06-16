import { ADD_TODO } from '../constants'

// ????
let nextIndex = 0;

export default text => ({
    type: ADD_TODO,
    id: nextIndex += 1,
    text
});
