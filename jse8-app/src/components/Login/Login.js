import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = ({ handleSubmit, pristine, submitting }) => (
    <form onSubmit={handleSubmit} style={{marginTop: '100px'}}>
        <div>
            <label>Nick</label>
            <div>
                <Field
                    name="nick"
                    component="input"
                    type="text"
                    placeholder="Nick"
                />
            </div>
        </div>
        <div>
            <label>Password</label>
            <div>
                <Field
                    name="passwd"
                    component="input"
                    type="password"
                    placeholder="Passowrd"
                />
            </div>
        </div>
        <div>
            <button type="submit" disabled={pristine || submitting}>
                Submit
            </button>
        </div>
    </form>
)

export default reduxForm({
    form: 'loginform'
})(LoginForm)
