import React, { createRef } from 'react'

const AddTodo = ({ addTodo }) => {
    let DOMInput = createRef()

    return (
        <div>
        <form
            onSubmit={e => {
                e.preventDefault()
                if (!DOMInput.current.value.trim()) {
                    return
                }
                addTodo(DOMInput.current.value)
                DOMInput.current.value = ''
            }}
        >
            <input ref={DOMInput} />
            <button type="submit">Add Todo</button>
        </form>
        </div>
    )
}

export default AddTodo
