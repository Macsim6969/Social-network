import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name='login' type={'text'} placeholder='login' />
            </div>
            <div>
                <Field component={'input'} name='password' type={'password'} placeholder='password' />
            </div>
            <div>
                <Field component={'input'} name='number' placeholder='Number' type={'number'} />
            </div>
            <div>
                <Field component={'input'} name='Remember' type={'checkbox'}  /> Remember Me
            </div>
            <div>
                <button>Regist</button>
            </div>
        </form>
    )
}

const LoginFormReg = reduxForm({ form: 'login' })(LoginForm)

const Login2 = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Register</h1>
            <LoginFormReg onSubmit={onSubmit} />
        </div>
    )
}

export default Login2;