import React from "react"
import { Field, reduxForm } from 'redux-form'
import { Input } from "../../Common/FormsControl/FormsControls"
import { required } from "../../utilits/validators/validator"


const  LoginForm = (props) => {
    console.log('UPdate')
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"login"} type="text" placeholder="login" validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"password"} type="password" placeholder="password" validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"remember me"} type="checkbox" /> Remember me
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