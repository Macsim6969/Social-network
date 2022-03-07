import React from "react"
import ss from './Login.module.scss'
import { connect } from "react-redux"
import { Field, reduxForm } from 'redux-form'
import { Input } from "../../Common/FormsControl/FormsControls"
import { required } from "../../utilits/validators/validator"
import {logine , logout} from '../../Redux/auth-reducer'
import { Navigate } from "react-router-dom"


const  LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"email"} type="email" placeholder="email" validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"password"} type="password" placeholder="password" validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox" /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
           { props.error && <div className={ss.form_erroe}>
                {props.error}
            </div>} 
        </form>
    )  
}   

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
       props.logine(formData.email , formData.password , formData.rememberMe)
    }

    if(props.isStatus){
        return <Navigate replace to='/' />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isStatus: state.auth.isStatus
})

export default connect (mapStateToProps , {logine , logout})(Login)