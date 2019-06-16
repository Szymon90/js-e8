import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input = createRef()

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.current.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.current.value))
                    input.current.value = ''
                }}
            >
                <input ref={input} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
