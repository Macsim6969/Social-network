import React from "react"
import { Field, reduxForm } from 'redux-form'



const  LoginForm = (props) => {
    console.log('UPdate')
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} type="text" placeholder="login" />
            </div>
            <div>
                <Field component={"input"} name={"password"} type="password" placeholder="password" />
            </div>
            <div>
                <Field component={"input"} name={"remember me"} type="checkbox" /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login