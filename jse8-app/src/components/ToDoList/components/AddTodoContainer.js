import { compose } from 'redux';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from './AddTodo'

const mapDispatchToProps = dispatch => ({
    addTodo: compose(dispatch, addTodo)
})

export default connect(
    null,
    mapDispatchToProps
)(AddTodo)
